// Define a type for the color variants
type ColorVariants = {
  blue: string;
  red: string;
 };
 
 // Define a type for the Button props
 type ButtonProps = {
  color: keyof ColorVariants; // This ensures color is either 'blue' or 'red'
  children: React.ReactNode; // Assuming children can be any valid React node
 };
 
 const Button = ({ color, children }: ButtonProps) => {
  const colorVariants: ColorVariants = {
     blue: 'bg-blue-600 hover:bg-blue-500',
     red: 'bg-red-600 hover:bg-red-500',
  };
 
  return (
     <>
       <button className={`${colorVariants[color]} ...`}>
         {children}
       </button>
     </>
  );
 };
 
 export default Button;