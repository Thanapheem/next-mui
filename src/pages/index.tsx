import AppLayout from "@/components/layout/appLayout/appLayout";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
  Stack,
  FormControlLabel,
  Radio,
  FormLabel,
  TextField,
} from "@mui/material";

import { ReactElement, useState } from "react";
import { Controller, useForm } from "react-hook-form";
Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
type FormValue = {
  transactionInfo: string;
  transactionType: string;
  transactionDate: string;
  channel: string;
  userId: string;
};
export default function Home() {
  const [selectedInfo, setSelectedInfo] = useState("");
  const formHook = useForm<FormValue>({
    defaultValues: {
      transactionInfo: "",
      transactionType: "",
      transactionDate: "",
      channel: "",
      userId: "",
    },
  });
  const { register, handleSubmit, control } = formHook;
  function submit(data: FormValue) {
    console.log(data);
  }

  return (
    <section className="space-y-4">
      <p>Search Transaction Infomation</p>
      <form onSubmit={handleSubmit(submit)}>
        <Stack spacing={2} width={"65%"}>
          <FormControl>
            <InputLabel shrink>Selct Transaction Information TYpe</InputLabel>
            <Select
              {...register("transactionInfo")}
              notched
              value={selectedInfo}
              onChange={(e) => setSelectedInfo(e.target.value)}
              size="small"
              label={"Select Transaction Information Type"}
            >
              <MenuItem value="">{""}</MenuItem>
              <MenuItem value="maintenance">Maintenance Transaction</MenuItem>
            </Select>
          </FormControl>
          <FormControl component={"fieldset"}>
            <FormLabel component={"legend"}>Transaction Type</FormLabel>
            <Controller
              control={control}
              name="transactionType"
              render={({ field }) => {
                return (
                  <RadioGroup
                    {...field}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="add"
                      control={<Radio />}
                      label="Add"
                    />
                    <FormControlLabel
                      value="update"
                      control={<Radio />}
                      label="Update"
                    />
                    <FormControlLabel
                      value="delete"
                      control={<Radio />}
                      label="Delete"
                    />
                    <FormControlLabel
                      value="deleteBulk"
                      control={<Radio />}
                      label="Delete Bulk"
                    />
                    <FormControlLabel
                      value="all"
                      control={<Radio />}
                      label="All"
                    />
                  </RadioGroup>
                );
              }}
            />
          </FormControl>
          <Stack width={"100%"} direction={"row"} gap={2} useFlexGap>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{ shrink: true }}
              {...register("channel")}
              label="Branch No./Channel"
            />
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{ shrink: true }}
              {...register("userId")}
              label="User ID"
            />
          </Stack>
          <Button type="submit" color={"primary"} variant={"contained"}>
            Search
          </Button>
        </Stack>
      </form>
    </section>
  );
}
