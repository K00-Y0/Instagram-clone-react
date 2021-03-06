import { React, useState } from 'react';
import { Button } from "@material-ui/core";
import firebase from "firebase";
import { storage, db } from "./firebase";
import './ImageUpload.css';

function ImageUpload({username}) {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(  // setting progress function
                    (snapshot.bytestransferred / snapshot.totalbytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error); // setting error function
                alert(error.messsage);
            },
            () => {
                storage  // setting the upload of files
                   .ref("images")
                   .child(image.name)
                   .getDownloadURL()
                   .then(url => {  // post image inside db
                       db.collection("posts").add({
                           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                           caption: caption,
                           imageUrl: url,
                           username: username
                       });

                       setProgress(0);
                       setCaption("");
                       setImage(null);
                   });
            }

        );
    };

    return (
        <div className="imageupload">
            <progress className="imageupload__progress" value={progress} max="100" />
            <input type="text" placeholder='Enter a caption' onChange={event => setCaption(event.target.value)} value={caption} />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload
