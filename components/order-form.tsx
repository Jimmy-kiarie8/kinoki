"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

const extraPackages = {
  "offer-4": {
    name: "Buy 4 Get 4 Free • 8 Packs",
    price: 6400,
    originalPrice: 12800,
    image: "/images/3.jpeg",
  },
  "offer-5": {
    name: "Buy 5 Get 5 Free • 10 Packs",
    price: 7500,
    originalPrice: 15000,
    image: "/images/3.jpeg",
  },
  "offer-6": {
    name: "Buy 6 Get 6 Free • 12 Packs",
    price: 8400,
    originalPrice: 16800,
    image: "/images/3.jpeg",
  },
  "offer-7": {
    name: "Buy 7 Get 7 Free • 14 Packs",
    price: 9800,
    originalPrice: 19600,
    image: "/images/3.jpeg",
  },
  "offer-8": {
    name: "Buy 8 Get 8 Free • 16 Packs",
    price: 11200,
    originalPrice: 22400,
    image: "/images/3.jpeg",
  },
  "offer-9": {
    name: "Buy 9 Get 9 Free • 18 Packs",
    price: 12600,
    originalPrice: 25200,
    image: "/images/3.jpeg",
  },
  "offer-10": {
    name: "Buy 10 Get 10 Free • 20 Packs",
    price: 14000,
    originalPrice: 28000,
    image: "/images/3.jpeg",
  },
};

const packageCatalog = { ...packages, ...extraPackages };

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

const moreOffers = [
  {
    key: "offer-1",
    packageKey: "single",
    title: "Buy 1 Pack, Get 1 Free — 2,000 KSH",
    total: "Total: 2 packs",
    note: "Save 2,000 KSH (1 pack free)",
  },
  {
    key: "offer-2",
    packageKey: "double",
    title: "Buy 2 Packs, Get 2 Free — 3,600 KSH",
    total: "Total: 4 packs",
    note: "Save 3,600 KSH (2 packs free)",
  },
  {
    key: "offer-3",
    packageKey: "triple",
    title: "Buy 3 Packs, Get 3 Free — 5,100 KSH",
    total: "Total: 6 packs",
    note: "Save 5,100 KSH (3 packs free)",
  },
  {
    key: "offer-4",
    packageKey: "offer-4",
    title: "Buy 4 Packs, Get 4 Free — 6,400 KSH",
    total: "Total: 8 packs",
    note: "Save 6,400 KSH (4 packs free)",
  },
  {
    key: "offer-5",
    packageKey: "offer-5",
    title: "Buy 5 Packs, Get 5 Free — 7,500 KSH",
    total: "Total: 10 packs",
    note: "Save 7,500 KSH (5 packs free)",
  },
  {
    key: "offer-6",
    packageKey: "offer-6",
    title: "Buy 6 Packs, Get 6 Free — 8,400 KSH",
    total: "Total: 12 packs",
    note: "Save 8,400 KSH (6 packs free)",
  },
  {
    key: "offer-7",
    packageKey: "offer-7",
    title: "Buy 7 Packs, Get 7 Free — 9,800 KSH",
    total: "Total: 14 packs",
    note: "Save 9,800 KSH (7 packs free)",
  },
  {
    key: "offer-8",
    packageKey: "offer-8",
    title: "Buy 8 Packs, Get 8 Free — 11,200 KSH",
    total: "Total: 16 packs",
    note: "Save 11,200 KSH (8 packs free)",
  },
  {
    key: "offer-9",
    packageKey: "offer-9",
    title: "Buy 9 Packs, Get 9 Free — 12,600 KSH",
    total: "Total: 18 packs",
    note: "Save 12,600 KSH (9 packs free)",
  },
  {
    key: "offer-10",
    packageKey: "offer-10",
    title: "Buy 10 Packs, Get 10 Free — 14,000 KSH",
    total: "Total: 20 packs",
    note: "Save 14,000 KSH (10 packs free)",
  },
];


export default function OrderForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    county: "",
    altPhone: "",
    customerNotes: "",
    packageType: "single",
    quantity: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [showMoreOffers, setShowMoreOffers] = useState(false);

  const selectedPackage =
    packageCatalog[formData.packageType as keyof typeof packageCatalog];
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

  const handleMoreOfferSelect = (packageKey: string) => {
    handlePackageSelect(packageKey);
    setShowMoreOffers(false);
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
                  <div className="mt-4 text-right">
                    <button
                      type="button"
                      className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      onClick={() => setShowMoreOffers(true)}
                    >
                      View full price list
                    </button>
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
              {/* Selected Package */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <span>Selected Package:</span> 
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <img
                      src={selectedPackage.image}
                      alt={selectedPackage.name}
                      className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{selectedPackage.name}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-emerald-600 font-bold text-xl">
                          KES {selectedPackage.price.toLocaleString()}
                        </span>
                        <span className="line-through text-gray-400 text-sm">
                          KES {selectedPackage.originalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>


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

                  <div>
                    <Label htmlFor="altPhone">Alternate Phone</Label>
                    <Input
                      id="altPhone"
                      type="tel"
                      value={formData.altPhone}
                      onChange={(e) =>
                        handleInputChange("altPhone", e.target.value)
                      }
                      placeholder="Optional alternate contact"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="customerNotes">Customer Notes</Label>
                    <Textarea
                      id="customerNotes"
                      value={formData.customerNotes}
                      onChange={(e) =>
                        handleInputChange("customerNotes", e.target.value)
                      }
                      placeholder="Add delivery directions or preferences"
                      className="mt-2"
                      rows={3}
                    />
                    <p className="text-xs text-slate-500 mt-1">
                      Optional — let us know if there’s a preferred delivery
                      window or gate code.
                    </p>
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
      {showMoreOffers && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  More Offers
                </h3>
                <p className="text-sm text-slate-500">
                  Browse our expanded bundle pricing before you order.
                </p>
                <p className="mt-1 text-sm font-semibold text-emerald-600">
                  Selected: {selectedPackage.name}
                </p>
              </div>
              <button
                type="button"
                className="text-sm font-semibold text-slate-500 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                onClick={() => setShowMoreOffers(false)}
              >
                Close
              </button>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {moreOffers.map((offer) => {
                const isActiveOffer =
                  offer.packageKey === formData.packageType;
                return (
                  <div
                    key={offer.key}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActiveOffer}
                    onClick={() => handleMoreOfferSelect(offer.packageKey)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleMoreOfferSelect(offer.packageKey);
                      }
                    }}
                    className={`rounded-2xl border p-4 transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                      isActiveOffer
                        ? "border-emerald-500 bg-emerald-50/70"
                        : "border-slate-100 bg-slate-50/60 hover:border-emerald-300 hover:bg-white/70"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold text-slate-900">
                        {offer.title}
                      </p>
                      {isActiveOffer && (
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{offer.total}</p>
                    {offer.note && (
                      <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                        {offer.note}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
