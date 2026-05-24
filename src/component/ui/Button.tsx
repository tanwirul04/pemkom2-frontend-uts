interface ButtonProps { 
    tittle: string; 
    type?: "button" | "submit";
    variant?: "primary" | "outline"; 
    className?: string; 
    isLoading?: boolean;
    onClick?: () => void; 
} 
 
export const Button: React.FC<ButtonProps> = ({ 
    tittle, 
    type = "button",
    variant = "primary", 
    className, 
    isLoading = false

}) => { 
 const baseStyle = 
   "px-7 py-2 rounded font-medium transition-all duration-200"; 
 const variantStyle = 
   variant === "primary" 
     ? "bg-blue-900 text-white hover:bg-slate-800" 
     : "border border-red-900 text-red-900 hover:bg-red-100"; 
 return ( 
   <button 
    type={type} 
    disabled={isLoading} 
    className={`${baseStyle} ${variantStyle} ${className}`}> 
     {isLoading ? "Loading..." : tittle} 
   </button> 
 ); 
}; 
 
export default Button; 