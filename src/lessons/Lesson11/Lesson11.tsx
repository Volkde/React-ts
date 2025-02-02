import { useEffect, useState } from "react";
import axios from "axios"; 
import { Lesson11Wrapper, FactBlock, ButtonContainer } from "./styles"; 

function Lesson11() {

  const [facts, setFacts] = useState<string[]> ([]); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState<string | null>(null);


  const fetchCatFact = async () => {
    setIsLoading(true); 
    setError(null); 

    try {

      const response = await axios.get("https://catfact.ninja/fact"); 
      setFacts([...facts, response.data.fact]); 
    }  catch (err) {
      setError(err.message || "ошибка при загрузке")
    } finally {
      setIsLoading(false); 
    }

  };


  useEffect(() => {
    fetchCatFact();
  }, []);

 
  const clearFacts = () => {
    setFacts([]); 
  };

  return (
    <Lesson11Wrapper>
      <ButtonContainer>

        <button onClick={fetchCatFact}>GET MORE INFO</button>
        {facts.length > 0 && <button onClick={clearFacts}>DELETE ALL DATA</button>}
      </ButtonContainer>

      {error && <p style={{  color: "red" }}>{error}</p>}

      {isLoading && <p>Loading... </p>}

      {facts.length > 0 && (
        <FactBlock>
          <ul>
            {facts.map((fact, index) => (

              <li key={index}>{fact}</li>
            ))}
          </ul>
        </FactBlock>
      )}
    </Lesson11Wrapper>
  );
}

export default Lesson11;
