import { useState } from 'react';
import pdfToText from 'react-pdftotext';
import axios from 'axios';

function PDFParserAndOutput() {
    const [extractedText, setExtractedText] = useState('');
    const [responses1, setResponses1] = useState([]);
    const [responses2, setResponses2] = useState([]);
    const [textAreaValue, setTextAreaValue] = useState('');

    function extractText(event) {
        const file = event.target.files[0];
        pdfToText(file)
            .then(text => {
                console.log("Extracted text from PDF:", text);
                setExtractedText(text);
            })
            .catch(error => {
                console.error("Failed to extract text from PDF:", error);
            });
    }

    async function handleUploadAndFetchResponses(event) {
        event.preventDefault();

        // Extracted text is required for both uploading and fetching responses
        if (!extractedText) {
            console.log('No text extracted from PDF.');
            return;
        }

        try {
            // Upload extracted text to backend
            const uploadResponse = await axios.post('/uploadPdf', { text: extractedText });

            // Append upload response to submit response
            setResponses1(prevResponses => [...prevResponses, uploadResponse.data.response1]);
            setResponses2(prevResponses => [...prevResponses, uploadResponse.data.response2]);

            console.log('Text sent to backend and responses received successfully.');
        } catch (error) {
            console.error('Error uploading PDF and fetching responses:', error);
        }
    }

    async function handleSubmitText(event) {
        event.preventDefault();

        try {
            // Submit text from textarea to backend
            const submitResponse = await axios.post('/Textprompt', { text: textAreaValue });

            // Append submit response to upload response
            setResponses1(prevResponses => [...prevResponses, submitResponse.data.response1]);
            setResponses2(prevResponses => [...prevResponses, submitResponse.data.response2]);

            console.log('Text submitted successfully.');
        } catch (error) {
            console.error('Error submitting text:', error);
        }
    }

    return (
        <div className="container">
            <div className='container'>
                <hr />
                <div className='box offset-3'>
                    <h2>Upload a PDF!</h2>
                    <form onSubmit={handleUploadAndFetchResponses}>
                        <input type="file" accept="application/pdf" onChange={extractText} />
                        <button type="submit" className='btn btn-primary'>Summarize PDF</button>
                    </form>
                </div>




            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="container box">
                        <h2>LLama2</h2>
                        <ul>
                            {responses1.map((response, index) => (
                                <li key={index}>{response}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="container box">
                        <h2>Phi</h2>
                        <ul>
                            {responses2.map((response, index) => (
                                <li key={index}>{response}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='col-12 offset-3 mt-3'>
                    <div className="box">
                        <h2>Enter your prompt</h2>
                        <textarea
                            value={textAreaValue}
                            onChange={(e) => setTextAreaValue(e.target.value)}
                            className="form-control"
                            rows="4"
                        />
                        <button onClick={handleSubmitText} className="btn btn-primary mt-2">Submit prompt</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PDFParserAndOutput;
