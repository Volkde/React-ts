import { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";

import { HomeworkWrapper, ImageBlock, ErrorBlock } from "./styles";

function Homework10() {

  const [firstInput, setFirstInput] = useState<string>(""); 

  const [secondInput, setSecondInput] = useState<string>(""); 
  const [imageUrl, setImageUrl] = useState<string | null>(null); 
  const [isLoading, setIsLoading]= useState<boolean>(false); 
  const [error, setError] = useState<string | null>(null); 


  const handleFirstInputChange = (event: ChangeEvent<HTMLInputElement>) => {

    setFirstInput(event.target.value);
  };

  const handleSecondInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondInput(event.target.value);
  };


  const fetchDogImage = async () => {
    
    const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";

    setIsLoading(true);
    setError(null);

    setImageUrl(null);

    try {

      const response = await axios.get(DOG_API_URL);
      setImageUrl(response.data.message);
    } catch (error: any) {

      setError("Ошибка загрузки изобр.");
    } finally {
      setIsLoading(false);
    }

  };

 
  useEffect(() => {

    if (firstInput) {

      fetchDogImage();
    }

  }, [firstInput]);

  return (

    <HomeworkWrapper>

      <Input name="firstInput" value={firstInput} onChange={handleFirstInputChange} />
      <Input name="secondInput" value={secondInput} onChange={handleSecondInputChange} />

      {isLoading && <Spinner />}
      {error && <ErrorBlock>{error}</ErrorBlock>}
      {imageUrl && <ImageBlock src={imageUrl} alt="Random Dog" />}
      
    </HomeworkWrapper>
  );
}

export default Homework10;
