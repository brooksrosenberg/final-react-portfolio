import craftImg from '../Pictures/craftImg.png'
import carEzImg from '../Pictures/carEzScreenshot.png'
import oracleImg from '../Pictures/OracleProjectScreenshot.png'


const works = [
    {
        'id': 1,
        'name': 'Craft',
        'photo': craftImg,
        'info': 'This fullstack application is an clothing ecommerce store with payment services',
        'tech': 'React.js, Express.js, Node.js, MongoDB, CryptoJS, Stripe, EmailJS, Redux, Axios',
        'deployedLink': 'https://limitless-reef-31254.herokuapp.com/',
        'githubLink': 'https://github.com/brooksrosenberg/reactEcommerceStore'
    },
    {
        'id': 2,
        'name': 'CarEz',
        'photo': carEzImg,
        'info': 'This fullstack application is a car forum where users can create accounts and interact by making posts for different car models',
        'tech': 'HTML, CSS, JavaScript, Node.js, MySQL, Heroku',
        'deployedLink': 'https://desolate-springs-51329.herokuapp.com',
        'githubLink': 'https://github.com/brooksrosenberg/carEzProject'
    },
    {
        'id': 3,
        'name': 'Oracle Project',
        'photo': oracleImg,
        'info': 'This application is a website that tells users their daily horoscope based off their star sign and a random fact of the day',
        'tech': 'HTML, CSS, JS, Bootstrap, JQuery',
        'deployedLink': 'https://brooksrosenberg.github.io/theOracleProject/',
        'githubLink': 'https://github.com/brooksrosenberg/theOracleProject'
    }
]
   

export default works;