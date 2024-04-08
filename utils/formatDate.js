
export function formatDate(date) {  
   

    const options = { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
      };

      return new Intl.DateTimeFormat('es-ES', options).format(new Date(date));
}

