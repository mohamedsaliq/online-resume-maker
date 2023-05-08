import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Button, Form, message, Spin, Tabs } from "antd";
import PersonalInfo from "../components/PersonalInfo";
import SkillsEducation from "../components/SkillsEducation";
import ExperienceProjects from "../components/ExperienceProjects";
import axios from "axios";

function Profile() {
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("online-resume-user"));
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const result = await axios.post("api/user/update", {
        ...values,
        _id: user._id,
      });
      localStorage.setItem("online-resume-user", JSON.stringify(result.data));
      setLoading(false);
      message.success("Profile updated successfully");
    } catch (error) {
      setLoading(false);
      message.error("Registration failed");
    }
  };
  return (
    <DefaultLayout>
      {loading && <Spin size="large" />}
      <div className="update-profile">
        <h4><b>Update Profile</b></h4>
        <hr />
        <Form layout="vertical" onFinish={onFinish} initialValues={user}>
          <Tabs defaultActiveKey="2">
            <Tabs.Item key="2" tab="Personal Info">
              <PersonalInfo />
            </Tabs.Item>
            <Tabs.Item key="3" tab="Skills and Education">
              <SkillsEducation />
            </Tabs.Item>
            <Tabs.Item key="4" tab="Experience / Projects">
              <ExperienceProjects />
            </Tabs.Item>
          </Tabs>

          <Button htmlType="submit">UPDATE</Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default Profile;