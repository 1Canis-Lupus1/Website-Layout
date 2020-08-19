import React from 'react';

const Main=()=>{
    let floating={
        float:"right"
    }

    return(
        <React.Fragment>
            <div class="container">
            <div class="row">

                {/* First Column */}
                <div class="col">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrJBL5B1sNQIuUjmgJPwGIk0V_DcuKzCVsNQ&usqp=CAU" height="40" width="40" alt="Edukated Logo" /><span><strong>Edu</strong>kated</span><br/><br/>
                    <div className="jumbotron rounded m-2" style={{height:"45vh"}}>
                        <ul>
                            <li className="m-3"><strong>Home</strong></li>
                            <li className="m-3"><strong>Discover</strong></li>
                            <li className="m-3"><strong>Messages</strong></li>
                            <li className="m-3"><strong>Settings</strong></li>
                        </ul>
                    </div><br/><br/>
                    <div className="jumbotron rounded">
                        <div class="card">
                            <div class="card-header">
                                <img className="m-2 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3LZWN50ttlzzi9sNUDRJNv6UDil1bcSs8TQ&usqp=CAU" height="70" width="125" />
                            
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                <p><strong>Updated Course</strong></p>
                                <footer class="blockquote-footer">by @karlatuts</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="jumbotron rounded col-4 m-3" style={{height:"15vh"}}>
                            Image
                        </div>
                        <div className="jumbotron rounded col-4 m-3" style={{height:"15vh"}}>
                            Image
                        </div>
                    </div>
                </div>




                {/* Second Column */}
                <div class="col-5">
                    <strong>Streaming</strong> Now <strong style={floating}>...</strong><br/><br/>
                    <img className="m-2 rounded" src="https://f0.pngfuel.com/png/178/419/man-illustration-png-clip-art-thumbnail.png" height="40" width="40" />
                    <img className="m-2 rounded" src="https://w0.pngwave.com/png/799/987/computer-icons-avatar-social-media-blog-font-awesome-avatar-png-clip-art-thumbnail.png" height="40" width="40" />
                    <img className="m-2 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpyf-e8n5taSC6Vi0wgTXJSWCgS5sJ4PoZvQ&usqp=CAU" height="40" width="40" />
                    <img className="m-2 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCcksN7YTw3vaS0a6W_VDpTHCa7Zcvvc0N-Q&usqp=CAU" height="40" width="40" />
                    <img className="m-2 rounded" src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" height="40" width="40" />
                    <img className="m-2 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRM3zqm7FMnvCNhyeWHEAqvP8POv4ByxBE1iQ&usqp=CAU" height="40" width="40" />
                    <img className="m-2 rounded" src="https://repository-images.githubusercontent.com/200409458/ee42d400-ac11-11ea-95fd-641da59b458b" height="40" width="40" />
                    <br/><br/>
                    
                    <strong>Popular</strong> This Week<br/><br/>
                    <div className="row">
                        <div className="col-5 jumbotron rounded m-2" style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRppWM5xiY7OCVbcZArBihT2FndwuZEElr5iA&usqp=CAU)",height:"62vh",backgroundSize:"cover"}} >
                            <span style={{color:"black"}}>
                                <img src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg" height="20" widht="20"/> Uran Design
                            </span>
                        </div>
                        <div className="col-5 jumbotron rounded m-2" style={{backgroundImage: "url(https://ak.picdn.net/shutterstock/videos/1013293871/thumb/1.jpg)",backgroundSize:"cover"}}>
                            <span style={{color:"white"}}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png" height="30" width="30" /> Lana Marandina
                            </span>
                        </div>
                    </div><br/>

                    <strong>Top</strong> Tutors<br/><br/>
                    <div className="row">
                        <div className="jumbotron rounded col-5 m-1" style={{backgroundColor:"#05D7CB"}}>
                            <img src="https://f0.pngfuel.com/png/340/946/man-face-illustration-avatar-user-computer-icons-software-developer-avatar-png-clip-art.png" height="40" width="60" alt="Tutor 1" class="float-left mr-2"/>
                            <strong><h6> Kenny Foster</h6></strong>
                        </div>
                        <div className="jumbotron rounded col-5 m-1" style={{backgroundColor:"#8BEE0A"}}>
                            <img src="https://mpng.subpng.com/20180630/ltq/kisspng-computer-icons-user-avatar-clip-art-skincare-cartoon-5b371025a6d8a7.5354815915303352696834.jpg" height="40" width="40" alt="Tutor 2" class="float-left mr-2"/>
                            <strong><h6>Aaron Kendroll</h6></strong>
                        </div>
                    </div>
                    <div className="row">
                        <div className="jumbotron rounded col-5 m-1" style={{backgroundColor:"#F15F8F"}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxXUd83er1zzGCdrq1cl7Cn-jT3baFXGuUwQ&usqp=CAU" height="40" width="40" alt="Tutor 3" class="float-left mr-2"/>
                            <strong><h6>Melanie Grutt</h6></strong>
                        </div>
                        <div className="jumbotron rounded col-5 m-1" style={{backgroundColor:"#AE6EF6"}}>
                            <img src="https://cdn4.iconfinder.com/data/icons/flatfaces-everyday-people-circular/125/flatfaces24-512.png" height="40" width="40" alt="Tutor 4" class="float-left mr-2"/>
                            <strong><h6>Keira Danlop</h6></strong>
                        </div>
                    </div>
                </div>
                



                {/* Third Column */}
                <div class="col-4">
                    <strong>Advanced</strong> Search <strong style={floating}>...</strong><br/><br/>
                        <div>
                            <input className="col-9 rounded" type="text" placeholder="Start Writing Something"/>
                            <button className="m-2 btn btn-warning btn-sm rounded">Find</button>
                        </div><br/><br/><br/>
                    <div className="jumbotron rounded" style={{backgroundImage:"url(https://images4.alphacoders.com/109/thumb-350-1096657.jpg)",height:"30vh",backgroundSize:"cover"}}>
                    </div>
                    <div className="row">
                        <div className="jumbotron rounded col-5 m-2" style={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQq6RDOv9ZeB3_QLnYHnqkSLnvcqIXLSYmACg&usqp=CAU)",height:"35vh",backgroundSize:"cover"}}>
                            More Image Here
                        </div>
                        <div className="jumbotron rounded col-5 m-2" style={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_HUEM4-cZ-z0cloBHPfSqwuQ9vlzs6hFwkw&usqp=CAU)",height:"35vh",backgroundSize:"cover"}}>
                            More Image Here
                        </div>
                    </div><br/>
                    <strong>Special Offers</strong><strong style={floating}>...</strong><br/><br/>
                    <div className="jumbotron rounded m-2" style={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDLnyI77vEn0x6cX_l2j-dA7SkPXlzv6iVLg&usqp=CAU)",height:"50vh",backgroundSize:"cover"}}>
                        Sample image here
                    </div>
                </div>

            </div>
            </div>
        </React.Fragment>
    );
}

export default Main;