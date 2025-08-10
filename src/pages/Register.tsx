import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    ResearcherId: "",
    institution: "",
    department: "",
    researchInterest: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.role ||
      !formData.ResearcherId ||
      !formData.institution ||
      !formData.department ||
      !formData.researchInterest ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.agreeTerms) {
      setError("You must agree to the terms.");
      return;
    }

    // Store data locally for Profile page
    localStorage.setItem("userData", JSON.stringify(formData));

    // Navigate to profile page
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation isAuthenticated={false} />

      <div className="container mx-auto px-4 py-8 flex justify-center">
        <Card className="w-full max-w-lg shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input name="fullName" value={formData.fullName} onChange={handleChange} />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>

              <div>
                <Label htmlFor="role">Role</Label>
                <Input name="role" value={formData.role} onChange={handleChange} />
              </div>

              <div>
                <Label htmlFor="ResearcherId">Researcher ID</Label>
                <Input name="ResearcherId" value={formData.ResearcherId} onChange={handleChange} />
              </div>

              <div>
                <Label htmlFor="institution">Institution</Label>
                <Input name="institution" value={formData.institution} onChange={handleChange} />
              </div>

              <div>
                <Label htmlFor="department">Department</Label>
                <Input name="department" value={formData.department} onChange={handleChange} />
              </div>

              <div>
                <Label htmlFor="researchInterest">Research Interest</Label>
                <Input name="researchInterest" value={formData.researchInterest} onChange={handleChange} />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" value={formData.password} onChange={handleChange} />
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <Label htmlFor="agreeTerms">I agree to the terms and conditions</Label>
              </div>

              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
