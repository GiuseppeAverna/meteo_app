import Form from "react-bootstrap/Form";

const CityChooser = (props) => {
  return (
    <Form.Select
      aria-label="city chooser select"
      value={props.cityName}
      onChange={(e) => props.changecityName(e.target.value)}
    >
      <option>San Cataldo</option>
      <option>Caltanissetta</option>
      <option>Catania</option>
      <option>Imola</option>
      <option>Roma</option>
      <option>Parigi</option>
      <option>Las Vegas</option>
      <option>New York</option>
      <option>Dubai</option>
      <option>Milano</option>
    </Form.Select>
  );
};

export default CityChooser;
