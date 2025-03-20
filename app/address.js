"use client";

import { CounterContext } from "@/contexts/CounterContext";
import { useContext } from "react";

const Address = ({ people }) => {
  const { count } = useContext(CounterContext);
  return (
    <div>
      Count is: {count}
      <br />
      <ul>
        {people.map((person) => (
          <li key={`people-with-address-${person.name}`}>
            {person.name}
            <br />
            Addresses:
            <ul>
              {person?.addresses?.map((address) => (
                <li key={`person${person.name}-address-${address.street}`}>
                  {address.type} - {address.street}, {address.city}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Address;
