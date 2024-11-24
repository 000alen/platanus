"use client";
//
import { FC } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { ArrowUpRight as ArrowIcon } from "lucide-react";
//
import avatar from "@/assets/avatar.png";
import layout from "./index.module.scss";

interface Props {
  patientName: string;
  diagnosis: {
    name: string;
    description: string;
  } | null;
  symptoms: unknown;
}

export const BentoGridSide: FC<Props> = ({ patientName, diagnosis, symptoms }) => {
  console.info("[dev] received diagnosis", diagnosis);
  console.info("[dev] received symptoms", symptoms);

  return (
    <>
      <div className={layout.gridRow} style={{ marginBottom: 24 }}>
        <div className={layout.gridCardTypeD}></div>
        <div className={layout.gridCardTypeC}>
          <Button size="lg" radius="full" isIconOnly>
            <ArrowIcon />
          </Button>
          <span>
            Escaneo <br />
            Cardiología
          </span>
          <p>1,276</p>
        </div>
      </div>
      <div className={layout.gridRow}>
        <div className={layout.gridCardTypeA}>
          <div>
            <Image src={avatar} alt="avatar" height={35} width={45} />
            <p>{patientName}</p>
          </div>
          <div className={layout.biometric}>
            <p>Frecuencia cardíaca</p>
            <span>110 bpm</span>
          </div>
          <div className={layout.biometric}>
            <p>Temperatura</p>
            <span>34.7°C</span>
          </div>
          <div className={layout.biometric}>
            <p>SpO2</p>
            <span>96%</span>
          </div>
          <Button size="lg" radius="full" isIconOnly>
            <ArrowIcon />
          </Button>
        </div>
        <div className={layout.gridCardTypeB}>
          <div>
            <div className="flex items-center w-fit px-3 py-1 mb-1 rounded-full backdrop-filter backdrop-blur-sm bg-white/15 text-sm font-light select-none border-1 border-[#8D959D] tracking-wider">
              87% probable
            </div>
            <span>Osteoporosis</span>
          </div>
          <Button size="lg" radius="full" isIconOnly>
            <ArrowIcon />
          </Button>
        </div>
      </div>
    </>
  );
};
