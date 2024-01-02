import './footer.css'
import SuppyLogo from '../assets/Suppy_Logo.png'


export default function SuppyFooter(){
    return(
       <>
        <div className='FooterDiv'>
        <img src={SuppyLogo} className='FooterLogo'/>
            <div className='ServicesDiv'>
                <h3>Services</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt modi nisi natus quaerat totam, sed itaque vitae, beatae, ad unde impedit illum architecto incidunt laborum neque perferendis repellat fugiat!</p>
            </div> 

            <div className='AboutDiv'>
                <h3>About us</h3>
                <p>
                Suppy is a revolutionary AI-powered shopping cart, catering to both supermarkets and customers.
                <br />
                <br />
                Suppy’s unique value proposition is providing an unmatched shopping experience by blending cutting-edge AI with convenience and cost-efficiency.
                </p>
            </div>
        </div>
       </>
    );
}