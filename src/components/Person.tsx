import { useState } from "react";

interface User {
  name: string;
  age: number;
  isMarried: boolean;
}

const User = ({ name, age, isMarried }: User) => {
  const [isShowDetails, setIsShowDetails] = useState<boolean>(false);
  const [personBio, setPersonBio] = useState<string | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(event.target.value);
  };
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => setIsShowDetails(!isShowDetails)}>
        {isShowDetails ? "Hide Details" : "Show Details"}
      </button>
      {isShowDetails && (
        <>
          <p>Age: {age}</p>
          <p>Married: {isMarried ? "Yes" : "No"}</p>
        </>
      )}
      <p>
        {name} Bio: {!personBio ? "No Bio available" : personBio}
      </p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default User;
