import { useEffect, useRef } from "react";
import * as Tone from "tone";
import styles from "./styles.module.css";

let osc;

export default function SoundCard({ waveType }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    if (waveType === "square") {
      context.rect(0, 0, 16, 16);
      context.fill();
    } else if (waveType === "triangle") {
      context.moveTo(0, 0);
      context.lineTo(16, 0);
      context.lineTo(8, 16);
      context.lineTo(0, 0);
      context.fill();
    } else if (waveType === "sawtooth") {
      context.moveTo(0, 0);
      context.lineTo(0, 16);
      context.lineTo(16, 16);
      context.lineTo(0, 0);
      context.fill();
    } else if (waveType === "noise") {
      context.moveTo(0, 0);
      context.lineTo(0, 16);
      context.moveTo(1, 5);
      context.lineTo(1, 13);
      context.moveTo(2, 8);
      context.lineTo(2, 9);
      context.moveTo(3, 8);
      context.lineTo(3, 9);
      context.moveTo(4, 0);
      context.lineTo(4, 16);
      context.moveTo(5, 5);
      context.lineTo(5, 13);
      context.moveTo(6, 8);
      context.lineTo(6, 9);
      context.moveTo(7, 8);
      context.lineTo(7, 9);
      context.moveTo(8, 0);
      context.lineTo(8, 16);
      context.moveTo(9, 5);
      context.lineTo(9, 13);
      context.moveTo(10, 8);
      context.lineTo(10, 9);
      context.moveTo(11, 8);
      context.lineTo(11, 9);
      context.moveTo(12, 0);
      context.lineTo(12, 16);
      context.moveTo(13, 5);
      context.lineTo(13, 13);
      context.moveTo(14, 8);
      context.lineTo(14, 9);
      context.moveTo(15, 8);
      context.lineTo(15, 9);
      context.moveTo(16, 0);
      context.lineTo(16, 16);
    } else if (waveType === "sample") {
      context.arc(8, 8, 6, 0, 2 * Math.PI);
      context.stroke();
      context.fill();
    } else if (waveType === "fm") {
      context.moveTo(0, 8);

      for (let i = 1; i < 16; i++) {
        context.lineTo(i, 8 * Math.sin(i - 1) + 8);
        context.moveTo(i, 8 * Math.sin(i - 1) + 8);
      }
    }
    context.stroke();
  }, []);

  const handleMouseDown = (e) => {
    if (waveType === "noise") {
      // initialize the noise and start
      osc = new Tone.Noise("pink");
      osc.toDestination();
      osc.start();
      osc.stop("+0.2");
    } else if (waveType === "sample") {
      osc = new Tone.Sampler({
        urls: {
          A1: "A1.mp3",
          A2: "A2.mp3",
        },
        baseUrl: "https://tonejs.github.io/audio/casio/",
        onload: () => {
          osc.triggerAttackRelease(["C2", "E2", "G2", "B2"], 1);
        },
      }).toDestination();
    } else if (waveType === "fm") {
      osc = new Tone.FMSynth().toDestination();
      osc.triggerAttackRelease("C5", "4n");
    } else {
      osc = new Tone.Oscillator();
      osc.type = waveType;
      osc.frequency.value = 240;
      osc.toDestination();
      osc.start();
      osc.stop("+0.2");
    }
  };

  return (
    <div className={styles.root} onMouseDown={handleMouseDown}>
      <canvas ref={canvasRef} className={styles.canvas}></canvas>
    </div>
  );
}
