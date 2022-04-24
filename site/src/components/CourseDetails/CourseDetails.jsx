import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faTags} from '@fortawesome/free-solid-svg-icons';
import {faClipboard} from '@fortawesome/free-solid-svg-icons';
import {faClone} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import { Player, BigPlayButton } from 'video-react';

class CourseDetails extends Component {

  render() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col lg={8} md={6} sm={12} className="mt-5">
                        <h1 className="courseDetailsTitle">Aenean sed nibh a magna posuere tempo faucib</h1>
                        <img className="courseDetailsImg" src="https://solverwp.com/demo/html/edumint/assets/img/course/9.png" alt="course img" />
                        <br/>
                        <p className="courseDescription">
                        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz,<br/><br/> bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack.Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. <br/><br/>  Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.
                        </p>
                    </Col>

                    <Col lg={4} md={6} sm={12} className="mt-5">
                        <div class="widget widget-feature">
                            <h4 class="widget-title">Course Features</h4>                                 
                            <ul>
                                <li><FontAwesomeIcon className="iconCourse" icon={faUser} /><span>Enrolled :</span> 1200 students</li>
                                <li><FontAwesomeIcon className="iconCourse" icon={faClock} /><span>Duration :</span> 2 hours</li>
                                <li><FontAwesomeIcon className="iconCourse" icon={faClipboard} /><span>Lectures :</span> 8</li>
                                <li><FontAwesomeIcon className="iconCourse" icon={faClone} /><span>Categories:</span> Technology</li>
                                <li><FontAwesomeIcon className="iconCourse" icon={faTags} /><span>Tags:</span> Android, JavaScript</li>
                                <li><FontAwesomeIcon className="iconCourse" icon={faClipboard} /><span>Instructor:</span> Ethan Dean</li>
                            </ul>
                            <div class="price-wrap text-center">
                                <h5>Price:<span>$54.00</span></h5>
                                <a class="btn btn-base btn-radius" href="#">ENROLL COURSE</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <br/><br/>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div class="widget widget-feature">
                            <h1 className="courseDetailsTitle">Praesent eu dolor eu orci vehicula euismod</h1>
                            <hr/>
                            <ul>
                                <li><FontAwesomeIcon className="iconCourse" icon={faUser} /> <span>Metus interdum metus</span> </li>
                                <li><FontAwesomeIcon className="iconCourse" icon={faUser} /> <span>Ligula cur maecenas</span> </li>
                                <li><FontAwesomeIcon className="iconCourse" icon={faUser} /> <span>Fringilla nulla</span> </li>
                                <li><FontAwesomeIcon className="iconCourse" icon={faUser} /> <span>Ligula cur maecenas</span> </li>
                                <li><FontAwesomeIcon className="iconCourse" icon={faUser} /> <span>Fringilla nulla</span> </li>
                            </ul>
                        </div>
                    </Col>
                    
                    <Col lg={6} md={12} sm={12}>
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                        </Player>
                    </Col>
                </Row>
            </Container>

        </Fragment>
    )
  }
}

export default CourseDetails