import React from 'react';

function Banner() {
    return (
        <div className='container mt-5'>
            <div className="jumbotron">
                <h1 className="display-4">Hi!</h1>
                <p className="lead">This is a simple text summarization app made using Ollama, React, and Node.js.</p>
                <hr className="my-4" />
                <p>You can upload a PDF to summarize your text. I compared LLama2 and Microsoft's Phi2.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="https://github.com/ollama/ollama" role="button">Learn more</a>
                </p>
            </div>
        </div>

    );
}

export default Banner;
