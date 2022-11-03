import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import '../App.css'

export default function Selects(props) {
  const { label, value, onChange, datasource, required,display } = props;
  return (
    <>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        variant="standard"
        fullWidth={true}
        value={value}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        required={required}
        onChange={onChange}
        display={display}
        // InputLabelProps={{ className: "textFieldlabel" }}
        // inputProps={{ className: "textFieldlabel" }}
      >
        { datasource && datasource.length > 0
          ? datasource.map((x) => (<MenuItem value={x.id}>{x.displayname}</MenuItem>))
          : null}
      </Select>
    </>
  );
}
