import { useEffect, useState } from "react";
import Widget from "./Widget";
import "./App.css";

const App = () => {
  const [widgets, setWidgets] = useState([]);
  const [activeWidgetId, setActiveWidgetId] = useState(null);

  const fetchWidgets = async () => {
    try {
      const response = await fetch(
        "https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets"
      );

      const data = await response.json();
      setWidgets(data);
    } catch (err) {
      console.error("Error fetching widgets:", err.message);
    }
  };

  useEffect(() => {
    fetchWidgets();
  }, []);

  const updateWidget = (id, key, value) => {
    setWidgets((prevWidgets) =>
      prevWidgets.map((widget) =>
        widget.id === id ? { ...widget, [key]: value } : widget
      )
    );

    if (key === "active" && value) {
      setActiveWidgetId(id);
    }
  };

  return (
    <div className="app-container">
      <div className="main-container">
        <h1 className="heading">Per product widgets</h1>
        <div className="v-separator"></div>
        <div className="widgets-container">
          {widgets.map((widget) => (
            <Widget
              key={widget.id}
              widget={widget}
              isActive={activeWidgetId === widget.id}
              updateWidget={updateWidget}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
