"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Minus, Plus, ShoppingCart, Shield, Truck } from "lucide-react";

const packages = {
  single: {
    name: "Buy 1 Get 1 Free • 2 Packs",
    price: 2000,
    originalPrice: 4000,
    image: "/images/1.jpeg",
  },
  double: {
    name: "Buy 2 Get 2 Free • 4 Packs",
    price: 3600,
    originalPrice: 7200,
    image: "/images/2.jpeg",
  },
  triple: {
    name: "Buy 3 Get 3 Free • 6 Packs",
    price: 5100,
    originalPrice: 12000,
    image: "/images/3.jpeg",
  },
};


const kenyanCounties = [
  "Baringo",
  "Bomet",
  "Bungoma",
  "Busia",
  "Elgeyo-Marakwet",
  "Embu",
  "Garissa",
  "Homa Bay",
  "Isiolo",
  "Kajiado",
  "Kakamega",
  "Kericho",
  "Kiambu",
  "Kilifi",
  "Kirinyaga",
  "Kisii",
  "Kisumu",
  "Kitui",
  "Kwale",
  "Laikipia",
  "Lamu",
  "Machakos",
  "Makueni",
  "Mandera",
  "Marsabit",
  "Meru",
  "Migori",
  "Mombasa",
  "Murang'a",
  "Nairobi",
  "Nakuru",
  "Nandi",
  "Narok",
  "Nyamira",
  "Nyandarua",
  "Nyeri",
  "Samburu",
  "Siaya",
  "Taita-Taveta",
  "Tana River",
  "Tharaka-Nithi",
  "Trans Nzoia",
  "Turkana",
  "Uasin Gishu",
  "Vihiga",
  "Wajir",
  "West Pokot"
];


export default function OrderForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    county: "",
    packageType: "single",
    quantity: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const selectedPackage =
    packages[formData.packageType as keyof typeof packages];
  const totalAmount = selectedPackage.price * formData.quantity;

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const scrollToFormDetails = () => {
    const formDetailsElement = document.getElementById('form-details');
    if (formDetailsElement) {
      formDetailsElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handlePackageSelect = (packageKey: string) => {
    handleInputChange("packageType", packageKey);
    // Scroll to form details on mobile
    if (window.innerWidth <= 1024) {
      setTimeout(scrollToFormDetails, 100);
    }
  };

  const handleStepClick = (stepNum: number) => {
    if (stepNum <= step) {
      // Scroll to form details on mobile
      if (window.innerWidth <= 1024) {
        setTimeout(scrollToFormDetails, 100);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          totalAmount,
          packageName: selectedPackage.name,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to thank you page with order details
        const params = new URLSearchParams({
          name: formData.customerName,
          total: totalAmount.toString(),
          package: selectedPackage.name,
        });
        window.location.href = `/thank-you?${params.toString()}`;
      } else {
        throw new Error(data.error || "Failed to submit order");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="order-form" className="py-16 md:py-24 bg-lime-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Order Your
              <span className="text-emerald-600"> Kinoki Detox Foot Pads</span>
            </h2>
            <p className="text-xl text-gray-600">
              Authentic Kinoki shipped across Kenya with free delivery and cash on delivery.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold cursor-pointer transition-colors ${
                      step >= stepNum
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                    onClick={() => handleStepClick(stepNum)}
                  >
                    {stepNum}
                  </div>
                  {stepNum < 3 && (
                    <div
                      className={`w-16 h-1 ${
                        step > stepNum ? "bg-emerald-600" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Your Order
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Package Selection */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">
                    Choose Your Package
                  </Label>
                  <div className="space-y-3">
                    {Object.entries(packages).map(([key, pkg]) => (
                      <div
                        key={key}
                        onClick={() => handlePackageSelect(key)}
                        className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                          formData.packageType === key
                            ? "border-emerald-600 bg-emerald-50"
                            : "border-gray-200 hover:border-emerald-300"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={pkg.image || "/placeholder.svg"}
                            alt={pkg.name}
                            className="w-16 h-16 object-contain"
                          />
                          <div className="flex-1">
                            <h4 className="font-bold">{pkg.name}</h4>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-500 line-through">
                                KES {pkg.originalPrice.toLocaleString()}
                              </span>
                              <span className="text-emerald-600 font-bold text-lg">
                                KES {pkg.price.toLocaleString()}
                              </span>
                            </div>
                            <div className="text-sm text-green-600 font-semibold">
                              Save KES{" "}
                              {(pkg.originalPrice - pkg.price).toLocaleString()}
                            </div>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full border-2 ${
                              formData.packageType === key
                                ? "border-emerald-600 bg-emerald-600"
                                : "border-gray-300"
                            }`}
                          >
                            {formData.packageType === key && (
                              <div className="w-full h-full rounded-full bg-white scale-50" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">
                    Quantity
                  </Label>
                  <div className="flex items-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleInputChange(
                          "quantity",
                          Math.max(1, formData.quantity - 1)
                        )
                      }
                      disabled={formData.quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-2xl font-bold w-12 text-center">
                      {formData.quantity}
                    </span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleInputChange("quantity", formData.quantity + 1)
                      }
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Order Total */}
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total Amount:</span>
                    {/* <span className="text-emerald-600">
                      KES {totalAmount.toLocaleString()}
                    </span> */}
                  </div>
                  {/* <div className="flex items-center gap-2 mt-2 text-green-600">
                    <Truck className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      FREE Delivery Included
                    </span>
                  </div> */}
                </div>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card id="form-details">
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="customerName">Full Name *</Label>
                    <Input
                      id="customerName"
                      value={formData.customerName}
                      onChange={(e) =>
                        handleInputChange("customerName", e.target.value)
                      }
                      placeholder="Enter your full name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="0712345678"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="your.email@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="county">Delivery Address</Label>
                    <Input
                      id="county"
                      value={formData.county}
                      onChange={(e) =>
                        handleInputChange("county", e.target.value)
                      }
                    />

                    {/* <Select
                      value={formData.county}
                      onValueChange={(value) =>
                        handleInputChange("county", value)
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your county" />
                      </SelectTrigger>
                      <SelectContent>
                        {kenyanCounties.map((county) => (
                          <SelectItem key={county} value={county}>
                            {county}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select> */}
                  </div>

                  <Button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !formData.customerName ||
                      !formData.phone
                    }
                    className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 py-4 text-lg font-semibold rounded-xl"
                  >
                    {isSubmitting
                      ? "Processing..."
                      : `ORDER NOW`}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Secure ordering • Cash on delivery</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
