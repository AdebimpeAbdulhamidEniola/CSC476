import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    staffStudentNumber: "",
    role: "",
    institution: "",
    department: "",
    researchInterests: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = target.checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Registration Successful!",
          description:
            "Welcome to ResearchHub. You can now start exploring research.",
        });

        localStorage.setItem("userEmail", formData.email);

        setFormData({
          fullName: "",
          email: "",
          staffStudentNumber: "",
          role: "",
          institution: "",
          department: "",
          researchInterests: "",
          password: "",
          confirmPassword: "",
          agreeTerms: false,
        });

        navigate("/users"); // redirect to profile page
      } else {
        toast({
          title: "Error",
          description: "Registration failed.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-8">
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="staffStudentNumber">Staff/Student Number</Label>
        <Input
          type="text"
          name="staffStudentNumber"
          value={formData.staffStudentNumber}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="role">Role</Label>
        <Input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="institution">Institution</Label>
        <Input
          type="text"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="department">Department</Label>
        <Input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="researchInterests">Research Interests</Label>
        <Input
          type="text"
          name="researchInterests"
          value={formData.researchInterests}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleChange}
          required
        />
        <Label htmlFor="agreeTerms">I agree to the terms and conditions</Label>
      </div>

      <Button type="submit">Register</Button>
    </form>
  );
};

export default Register;
