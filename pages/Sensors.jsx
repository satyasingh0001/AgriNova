import Card from "../components/Card/Card";
import styles from "./styles/Sensors.module.css";

const Sensors = () => {
  const sensors = [
    { name: "Temperature", value: "22°C" },
    { name: "Humidity", value: "68%" },
    { name: "Soil Moisture", value: "45%" },
    { name: "Light Intensity", value: "1200 lx" },
  ];

  return (
    <div className={styles.sensors}>
      {sensors.map((s, idx) => (
        <Card key={idx} title={s.name}>
          <p>{s.value}</p>
        </Card>
      ))}
    </div>
  );
};

export default Sensors;
