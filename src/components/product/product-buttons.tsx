import { Button } from "../button";

export const ProductButtons = () => {
  return (
    <div className="flex items-center  gap-2 mt-4">
      <Button className="w-full">Savatga qo'shish</Button>
      <Button variant="outline" className="w-full">
        1ta klikda xarid qilish
      </Button>
    </div>
  );
};
