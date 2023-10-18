import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

interface TagsSelectProps {
  setFieldValue: (field: string, value: any) => void;
}

const tagsName = ["friend", "family"];

export default function TagsSelect(props: TagsSelectProps) {
  const [tags, setTags] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof tags>) => {
    const {
      target: { value },
    } = event;
    setTags(() => {
      const newTags = typeof value === "string" ? value.split(",") : value;
      props.setFieldValue("tags", newTags);
      return newTags;
    });
  };

  return (
    <div>
      <FormControl sx={{ width: "100%" }} size="small">
        <InputLabel id="demo-multiple-checkbox-label">Tags</InputLabel>
        <Select
          size="small"
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={tags}
          onChange={handleChange}
          input={<OutlinedInput label="Tags" />}
          renderValue={(selected) => selected.join(", ")}
        >
          {tagsName.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={tags.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
