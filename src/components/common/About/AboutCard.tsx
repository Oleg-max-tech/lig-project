// components/AboutCard.tsx
import { ReactNode } from "react";

interface AboutCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const AboutCard = ({ icon, title, description }: AboutCardProps) => (
  <div className="space-y-3 pl-4">
    <div className="text-2xl text-white">{icon}</div>

    <div className="inline-block">
      <h4 className="text-2xl font-semibold text-white">{title}</h4>
      <div
        className="h-0.5 bg-gradient-to-r from-white to-gray-600 rounded-full mt-1"
        style={{ width: "calc(100% + 10px)" }}
      />
    </div>

    <p className="text-sm text-gray-300">{description}</p>
  </div>
);
