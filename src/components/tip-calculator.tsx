"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  IndianRupee,
  Users,
  Percent,
  Minus,
  Plus,
  RefreshCw,
} from "lucide-react";

export function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState(18);
  const [people, setPeople] = useState(1);
  const [roundUp, setRoundUp] = useState(false);
  
  const [animationKey, setAnimationKey] = useState(0);

  const billAmount = parseFloat(bill) || 0;
  const tipAmount = billAmount * (tipPercentage / 100);
  const totalAmount = billAmount + tipAmount;

  const {
    tipPerPerson,
    totalPerPerson,
    finalTotalTip,
    finalTotalBill,
  } = useMemo(() => {
    if (people < 1 || billAmount <= 0) {
      return { tipPerPerson: 0, totalPerPerson: 0, finalTotalTip: 0, finalTotalBill: 0 };
    }

    const tipPerPersonRaw = tipAmount / people;
    const totalPerPersonRaw = totalAmount / people;

    if (roundUp) {
      const roundedTotalPerPerson = Math.ceil(totalPerPersonRaw);
      const newTotalBill = roundedTotalPerPerson * people;
      const newTotalTip = newTotalBill - billAmount;
      return {
        tipPerPerson: newTotalTip / people,
        totalPerPerson: roundedTotalPerPerson,
        finalTotalTip: newTotalTip,
        finalTotalBill: newTotalBill,
      };
    }

    return {
      tipPerPerson: tipPerPersonRaw,
      totalPerPerson: totalPerPersonRaw,
      finalTotalTip: tipAmount,
      finalTotalBill: totalAmount,
    };
  }, [billAmount, tipPercentage, people, roundUp, tipAmount, totalAmount]);

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(e.target.value);
    triggerAnimation();
  };

  const handleTipChange = (value: number[]) => {
    setTipPercentage(value[0]);
    triggerAnimation();
  };
  
  const handleSetTip = (value: number) => {
    setTipPercentage(value);
    triggerAnimation();
  }

  const handlePeopleChange = (change: number) => {
    setPeople((prev) => Math.max(1, prev + change));
    triggerAnimation();
  };

  const handleRoundUpChange = (checked: boolean) => {
    setRoundUp(checked);
    triggerAnimation();
  };

  const handleReset = () => {
    setBill("");
    setTipPercentage(18);
    setPeople(1);
    setRoundUp(false);
    triggerAnimation();
  };
  
  const triggerAnimation = () => {
    setAnimationKey(prev => prev + 1);
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  };

  const tipButtons = [10, 15, 18, 20, 25];

  return (
    <Card className="w-full max-w-4xl shadow-2xl">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2">
          <div className="p-8 space-y-6">
            <CardTitle className="text-2xl font-headline">Bill Details</CardTitle>
            <div className="space-y-4">
              {/* Bill Amount */}
              <div className="space-y-2">
                <Label htmlFor="bill-amount">Bill Amount</Label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="bill-amount"
                    type="number"
                    placeholder="0.00"
                    value={bill}
                    onChange={handleBillChange}
                    className="pl-10 text-lg"
                  />
                </div>
              </div>

              {/* Tip Percentage */}
              <div className="space-y-2">
                <Label htmlFor="tip-percentage">Tip Percentage</Label>
                 <div className="flex items-center gap-4">
                    <Percent className="h-5 w-5 text-muted-foreground" />
                    <Slider
                      id="tip-percentage"
                      min={0}
                      max={50}
                      step={1}
                      value={[tipPercentage]}
                      onValueChange={handleTipChange}
                    />
                    <span className="font-semibold w-12 text-right">{tipPercentage}%</span>
                 </div>
                 <div className="flex gap-2 pt-2">
                    {tipButtons.map(tip => (
                        <Button 
                            key={tip}
                            variant={tipPercentage === tip ? "default" : "secondary"} 
                            size="sm"
                            onClick={() => handleSetTip(tip)}
                            className="flex-1"
                        >
                            {tip}%
                        </Button>
                    ))}
                 </div>
              </div>

              {/* Number of People */}
              <div className="space-y-2">
                <Label htmlFor="number-of-people">Number of People</Label>
                <div className="flex items-center gap-4">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePeopleChange(-1)}
                    disabled={people <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    id="number-of-people"
                    type="number"
                    value={people}
                    readOnly
                    className="text-center text-lg font-semibold w-20"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePeopleChange(1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Round Up */}
              <div className="flex items-center justify-between pt-4">
                <Label htmlFor="round-up" className="text-base">
                  Round Up Total
                </Label>
                <Switch
                  id="round-up"
                  checked={roundUp}
                  onCheckedChange={handleRoundUpChange}
                />
              </div>
            </div>
          </div>
          <div className="bg-primary text-primary-foreground p-8 rounded-b-lg md:rounded-r-lg md:rounded-bl-none flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex justify-between items-baseline">
                <div>
                  <p className="text-lg">Tip Amount</p>
                  <p className="text-sm opacity-80">/ person</p>
                </div>
                <p key={`tip-${animationKey}`} className="text-4xl font-bold animate-pulse-light">
                  {formatCurrency(tipPerPerson)}
                </p>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <p className="text-lg">Total</p>
                  <p className="text-sm opacity-80">/ person</p>
                </div>
                <p key={`total-${animationKey}`} className="text-4xl font-bold animate-pulse-light">
                  {formatCurrency(totalPerPerson)}
                </p>
              </div>
              
              <div className="border-t border-primary-foreground/20 my-6"></div>
              
              <div className="space-y-4 text-sm opacity-90">
                <div className="flex justify-between">
                  <p>Total Tip</p>
                  <p>{formatCurrency(finalTotalTip)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Total Bill</p>
                  <p>{formatCurrency(finalTotalBill)}</p>
                </div>
              </div>
            </div>
            <Button
              variant="secondary"
              className="w-full mt-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground"
              onClick={handleReset}
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
