import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true,
        unique : true,
    },
        email:{
        type : String,
        required : true,
        unique : true,
    },
         password:{
        type : String,
        required : true,
        
    },
    profilePicture:{
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAMFBMVEXk5ueutLfo6uu3vb+rsbTe4eK9wsTa3d7IzM7Bxsi6v8LN0dOxt7rX2tvQ1NbFycu/cW2wAAAC6klEQVR4nO2awZKDIAxAIYACCv7/365a67a7FRMk1ANvpqcefBNCDEQhGo1Go9FoNBqNRqPxC8B3H276OAw2BmPEN0xAhElJvTH6ydQOCJhpfr58YfYYagYDjHsX2DTkUE8hyg8Gq4XqK4WiOzBYLWwFCTBHQdgkOn6HPiWwSvivK/BLmHOFRYIzJ2DEOLAmJthkOr5IBC4JCEgFKUcmBSFwK7EGYuIJBAzoMMwYHgeCAVMgIFLCIDWDggBFUZB6YAiEIYVBSlVeAV0bdhiy0hMVGBbD4IvDRlfcoacuhRyLO5AK1IPSCQET3aEv7eDICjqWdqBuCw4HWpW8jUPpE88t4tDdwCFjb4bSDjeoUQLfzz4p39eiTjdvqPJNDHVjMBx0wBEXQ5d+XQj6y5uhl8OeNfcwcDT3xIZSsxxyaI01z/mflJW6dJHcIJQIXb6hfUDJCJ4j7wJ2a7DeEOICwbYSC9izN5+BwKYEXzI8JBB9BPud9anEaPhvrI9v7Re0qqCw3Jr7Q4kq1/YPizh+tNC+ShA2CTGMfyc5Wnqmd8SxRejWadr6+GWqZmuNcN40oI/Wee87Z2P1qd4u8UL1h88/Y0K0k+sW3GSH2JvtnwrPn5dgcH7chqvymQ9LSihnA/vsGUyYlP4023xujvk/x5ccACZ6mR7qbR5SDTwD8NAhnv9SLEpPnkHYz5UxGQ5XsGIcjLcRFr7QXAuEIyzCX3yJUyfYCwZynT1fjAWEawaLxLUL/HkZrhqsFhe+SICevBmOyA0FcYiWRLs8hSLrsEvk9Jlw3DTmQe+3iyvMUCUYFIgSkPrsJp+RcAjMuZzGSaADQfjOgQj+so46VaZIYIsVSz4+QaVEyfL4H+QVDacC7tKQPt8nghkpMCsgvltiDwPmQp8+QyRz1mKyladfzgoVW5V+5aRik76Byia9GPTpXQYng3DWGrk7uNRi5ExzM0iWKabe5R9JB6dqkN4YUIdkTjYajUbjhvwAhkMhCkCbAawAAAAASUVORK5CYII=",

    },
},
{timestamps : true});

const User = mongoose.model('User',userSchema);

export default User;