'use client';
import Button from "@/components/Button";
import useModalOne from "@/hooks/useModalOne";
import useModalTwo from "@/hooks/useModalTwo";

const Home = () => {
  const { onOpen } = useModalOne();
  const { onOpen: openSecond } = useModalTwo();

  return (
    <div className='px-24 flex gap-x-6'>
      <Button onClick={onOpen}>
        Open Popup 1
      </Button>
      <Button onClick={openSecond}>
        Open Popup 2
      </Button>
    </div>
  )
}

export default Home;