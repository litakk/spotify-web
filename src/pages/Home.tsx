import Footer from "@/components/custom/Footer";

interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    return ( 
        <>
        <h3>Динамическая страница Home</h3>
        <Footer/>
        </>
     );
}
 
export default Home;