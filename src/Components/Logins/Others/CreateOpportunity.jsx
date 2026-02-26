import React from 'react'
import Section from '../OpportunityCards/Section'
import Input from '../OpportunityCards/Input'
import Select from '../OpportunityCards/Select'
import Textarea from '../OpportunityCards/Textarea'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from 'react'
import API from '../../../Services/api'

const CreateOpportunity = () => {

  {/* ---------------- Create Oppotunity ---------------- */}
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "followUpDate" ? new Date(value) : value,
    });
  };    

  {/* ---------------- HandleSubmit ---------------- */}
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/api/opportunity/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Opportunity created successfully ✅");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Error creating opportunity");
    }
  };

  return (
    <>
      <div className="min-h-screen p-10 font-outfit
        bg-[#faf7f2] dark:bg-gray-900 transition-colors">

        {/* 🔧 force readable text inside all child components in dark mode */}
        <div className="max-w-5xl mx-auto rounded-2xl shadow-2xl p-10
          bg-white dark:bg-gray-800
          border border-gray-200 dark:border-gray-700
          dark:[&_label]:text-gray-200
          dark:[&_p]:text-gray-200
          dark:[&_span]:text-gray-200
          dark:[&_input]:bg-gray-700
          dark:[&_input]:text-gray-100
          dark:[&_select]:bg-gray-700
          dark:[&_select]:text-gray-100
          dark:[&_textarea]:bg-gray-700
          dark:[&_textarea]:text-gray-100">

          <h2 className="text-3xl font-bold mb-8 text-center
            text-gray-900 dark:text-gray-100">
            Create Opportunity
          </h2>

          {/* Opportunity Basics */}
          <Section title="Opportunity Basics">
            <Input onChange={handleChange} name="productInterest" label="Product / Service of Interest" />
            <Input onChange={handleChange} name="dealValue" label="Estimated Deal Value" type="number" />
            <Select onChange={handleChange} name="stage" label="Stage" options={["New", "Closed", "Qualified", "Proposal", "Negotiation"]} />
            <Select onChange={handleChange} name="interestLevel" label="Interest Level" options={["Low", "Medium", "High"]} />
            <Input onChange={handleChange} name="priority" label="Priority Rating" />
          </Section> 

          {/* Contact Details */}
          <Section title="Contact Details">
            <Input onChange={handleChange} name="fullName" label="Full Name" />
            <Input onChange={handleChange} name="jobTitle" label="Job Title / Role" />
            <Input onChange={handleChange} name="email" label="Email Address" type="email" />
            <Input onChange={handleChange} name="phone" label="Phone Number" />
            <Input onChange={handleChange} name="address"  label="Address" />
          </Section>

          {/* Organization */}
          <Section title="Organization Details">
            <Input onChange={handleChange} name="companyName" label="Company Name" />
            <Input onChange={handleChange} name="industry" label="Industry / Sector" />
            <Input onChange={handleChange} name="companySize" label="Company Size" />
            <Input onChange={handleChange} name="region" label="Region / Territory" />
            <Input onChange={handleChange} name="existingVendor" label="Existing Vendor / Partner" />
          </Section> 

          {/* Qualification */}
          <Section title="Lead Qualification">
            <Select onChange={handleChange} name="budgetAvailable"  label="Budget Availability" options={["Yes", "No", "Unknown"]} />
            <Select onChange={handleChange} name="decisionMaker" label="Decision Maker Identified" options={["Yes", "No"]} />
            <Select onChange={handleChange} name="decisionTimeline"  label="Decision Timeline" options={["Immediate", "3–6 Months", ">6 Months"]} />
          </Section>

          {/* Tracking */}
          <Section title="Opportunity Tracking">
            {/* <Input onChange={handleChange} label="Assigned Owner" /> */}
            <Input onChange={handleChange} name="followUpDate" label="Next Follow-up Date" type="date" />
            <Textarea onChange={handleChange} name="notes" label="Notes / Comments" />
          </Section>

          {/* Compliance */}
          <Section title="Compliance & Audit">
            <Select onChange={handleChange} name="consentStatus" label="Consent Status" options={["Opted-in", "Opted-out"]} />
            <Input onChange={handleChange} name="documentRef" label="Document Reference (RFP / Tender ID)" />
            <Input onChange={handleChange} label="Evidence Attachment" type="text" name="evidenceFile" placeholder="file name or url" />
          </Section>

          {/* Submit */}
          <div className="text-center mt-10">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 font-semibold rounded-xl transition
                bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Create Opportunity
            </button>
          </div>

          <Link
            to="/employee-dashboard"
            className="block text-center mt-6 hover:underline
              text-indigo-600 dark:text-indigo-400"
          >
            ← Back to Dashboard
          </Link>

        </div>
      </div>
    </>
  )
}

export default CreateOpportunity
