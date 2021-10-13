function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PdeyX2bXD/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) 
{ if (error) 
    { console.error(error); 
    } 
    else
     { 
         console.log(results); 
         random_number_r = Math.floor(Math.random() * 255) + 1;
         random_number_g = Math.floor(Math.random() * 255) + 1;
         random_number_b = Math.floor(Math.random() * 255) + 1;

         document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
         document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed;(2)+"%";
         document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
         document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";;
        
         img = document.getElementById('alien1');
         img1 = document.getElementById('alien2');
         img2 = document.getElementById('alien3');
         img3 = document.getElementById('alien4');

         if (results[0].label == "meow") 
         { 
         img.src = 'https://static.theprint.in/wp-content/uploads/2021/04/yawning-lion.jpg'; 
         img1.src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'; 
         img2.src = 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" '; 
        } else if(results[0].label == "roar") 
         { 
         img.src = 'https://static.theprint.in/wp-content/uploads/2021/04/yawning-lion.jpg'; 
         img1.src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'; 
         img2.src = 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" id="alien3'; 
        }  else if(results[0].label == "bark") 
        { 
        img.src = 'https://static.theprint.in/wp-content/uploads/2021/04/yawning-lion.jpg'; 
        img1.src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'; 
        img2.src = 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" id="alien3'; 
       } else{ 
        img.src = 'https://static.theprint.in/wp-content/uploads/2021/04/yawning-lion.jpg'; 
        img1.src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'; 
        img2.src = 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" id="alien3'; 
       }
        

       
     }
    }
