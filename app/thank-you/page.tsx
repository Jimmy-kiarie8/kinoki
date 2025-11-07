"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Truck, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";

function ThankYouContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(10);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Get order details from URL params
  const customerName = searchParams.get("name") || "Valued Customer";
  const orderTotal = searchParams.get("total") || "0";
  const packageName = searchParams.get("package") || "Kinoki Coffee";

  useEffect(() => {
    // Start countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setIsRedirecting(true);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const handleManualRedirect = () => {
    setIsRedirecting(true);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-2xl">
        <CardContent className="p-8 md:p-12 text-center">
          {/* Success Animation */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Thank You, {customerName}!
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Your order has been successfully placed
            </p>
            <p className="text-lg text-emerald-600 font-semibold">
              Order Total: KES {parseInt(orderTotal).toLocaleString()}
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-emerald-50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">
              Order Confirmation
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-gray-700">Package:</span>
                <span className="font-semibold">{packageName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Amount:</span>
                <span className="font-semibold text-emerald-600">
                  KES {parseInt(orderTotal).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Payment Method:</span>
                <span className="font-semibold">Cash on Delivery</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              What happens next?
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-semibold text-blue-800">Order Confirmation Call</p>
                  <p className="text-blue-700 text-sm">
                    We'll call you within 24 hours to confirm your order details
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-semibold text-blue-800">FREE Delivery</p>
                  <p className="text-blue-700 text-sm">
                    Your Kinoki Coffee will be delivered within 2-3 business days
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-semibold text-blue-800">Start Your Journey</p>
                  <p className="text-blue-700 text-sm">
                    Begin experiencing the energy boost from Kinoki Coffee!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Need Help?
            </h3>
            <p className="text-gray-600 mb-2">
              If you have any questions about your order, please contact us:
            </p>
            <div className="space-y-1">
              <p className="font-semibold text-gray-800">Phone: +254 700 000 000</p>
              <p className="font-semibold text-gray-800">Email: support@Kinokicoffee.co.ke</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Button
              onClick={handleManualRedirect}
              disabled={isRedirecting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg font-semibold rounded-xl"
            >
              {isRedirecting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Redirecting...
                </div>
              ) : (
                "Continue Shopping"
              )}
            </Button>
            
            <Link href="/">
              <Button
                variant="outline"
                className="w-full py-3 text-lg font-semibold rounded-xl border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Auto-redirect notice */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <Clock className="w-4 h-4 inline mr-1" />
              This page will automatically redirect to the homepage in{" "}
              <span className="font-bold">{countdown}</span> seconds
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-2xl">
        <CardContent className="p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-100 rounded-full mb-6">
            <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loading...
          </h1>
          <p className="text-xl text-gray-600">
            Preparing your order confirmation
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ThankYouContent />
    </Suspense>
  );
}
