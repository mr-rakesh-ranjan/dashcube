import React from 'react'

const Chatbot = () => {
    return (
        <>
            <div className="col-lg-6 col-md-12 col-sm-12 log-trend-res">
                <div className="card h-100">
                    <div className="card-body d-flex flex-column server-chatbot" style={{overflowY: "auto", 'height': '400px'}}>
                        <h6 className="fw-bold">Serverlog Chatbot</h6>
                        <div className="pt-2">
                            <form action="#" className="chat-form">
                                <div className="form-group">
                                    <div className="photo-container">
                                        <img className="rounded-circle" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" width="40px" height="40px"/>
                                    </div>
                                    <div className="input-container">
                                        <input readonly type="text" placeholder="Show me the errors for the last 10 mins" className="message-input" id="messageInput"/>
                                            <div className="send-icon" id="sendIcon"><i className='bi bi-send'></i></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <!-- Bot Chat Message --> */}
                        <div className="message bot-message pt-5 p-5 padding-res">
                            <div className="photo-container">
                                <img className="rounded-circle" src="" width="10px" height="10px" alt='chip'/>
                            </div>
                            <div className="message-content">
                                <p><span className="fw-bold">Log-DB: What are the errors in the logs in the last 10 mins</span><br/>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                            </div>
                        </div>



                        <form action="#" className="chat-form mt-auto">
                            <div className="form-group">
                                <div className="photo-container">
                                    <img className="rounded-circle" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" width="40px" height="40px"/>
                                </div>
                                <div className="input-container">
                                    <input type="text" placeholder="How can I help you?" className="message-input" id="messageInput"/>
                                        <div className="send-icon" id="sendIcon"><i className='bi bi-send'></i></div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            </>
            )
}

            export default Chatbot