// Define a type for the color variants
type ColorVariants = {
  red: string;
  white: string;
 };
 
 // Define a type for the Button props
 type ButtonProps = {
  color: keyof ColorVariants; // This ensures color is either 'blue' or 'red'
  children: React.ReactNode; // Assuming children can be any valid React node
 };
 
 const Button = ({ color, children }: ButtonProps) => {
  const colorVariants: ColorVariants = {
     red: 'bg-[#FF6464] hover:bg-blue-500',
     white: 'bg-white-600 hover:bg-red-500',
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