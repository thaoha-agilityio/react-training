import { ChangeEvent, Profiler, useState } from "react";

type FormProp = {
  labelName: string;
};

export const Form = (props: FormProp) => {
  const { labelName } = props;

  const [inputValue, setInputValue] = useState<string>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <label htmlFor={labelName}>
        {labelName}:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
    </div>
  );
};

export const ExampleProfiler = () => {
  return (
    <div>
      <h2>Profiler</h2>
      <Profiler
        id="name"
        onRender={(
          id,
          phase,
          actualDuration,
          startTime,
          baseDuration,
          commitTime,
          interactions
        ) => {
          console.log(
            `id: ${id} phase: ${phase} actualDuration: ${actualDuration} startTime: ${startTime} baseDuration: ${baseDuration} commitTime: ${commitTime} interactions: ${interactions}`
          );
        }}
      >
        <Form labelName="Name" />
        <Profiler
          id="number"
          onRender={(
            id,
            phase,
            actualDuration,
            startTime,
            baseDuration,
            commitTime,
            interactions
          ) => {
            console.log(
              `id: ${id} phase: ${phase} actualDuration: ${actualDuration} startTime: ${startTime} baseDuration: ${baseDuration} commitTime: ${commitTime} interactions: ${interactions}`
            );
          }}
        >
          <Form labelName="Number" />
        </Profiler>
      </Profiler>
    </div>
  );
};
