import React, { Component } from 'react';
import '../styles/App.css';
import Information from './Information.js';
import PersonalProfile from './PersonalProfile.js';
import Education from './Education.js';
import Skills from './Skills.js';
import Scholarships from './Scholarships.js';
import Volunteering from './Volunteering.js'
import Interest from './Interest';
import Portfolio from './Portfolio';
import Camera from 'react-icons/lib/fa/camera';
import Travelling from 'react-icons/lib/fa/plane';
import Music from 'react-icons/lib/fa/music';
import Cooking from 'react-icons/lib/fa/cutlery';

class App extends Component {

    state = {
        information: {
            name: 'Xinqi Li',
            address: 'Apartment 4, Irishtown Central, Golden Island, Athlone, Co. Westmeath, Ireland',
            phone: '+353831839382',
            email: 'rickyli1992@gmail.com',
            imageUrl: require('../images/avatar.jpg'),
            portfolio: 'http://www.xinqi-lee.com',
            facebook: 'https://www.facebook.com/xinqili1992',
            linkedin: 'https://www.linkedin.com/in/xinqi-li-715361b5/',
            github: 'https://github.com/XinqiLi1992'

        },
        profile: <p>Highly motivated and hardworking postgraduate looking to secure a role in frontend engineering or other related IT field with a progressive company in Ireland.
            I hold a MSc degree in Computer Science from <a target='_blank' rel='noopener noreferrer' href="http://www.ucd.ie">UCD</a> and a MSc in Data Science from <a target='_blank' rel='noopener noreferrer' href="http://www.ucc.ie">UCC</a> for which I recieved first class honours in both.
            This website was made by me in JavaScript & React, the source code is available on my GitHub.</p>,
        education: [
            {
                university: 'University College Cork, Cork, Ireland',
                degree: 'MSc. Data Science & Analytics',
                honours: 'First class honours',
                gpa: '74%',
                date: '09/2016 - 10/2017',
                description:<div>
                    <p>A one-year master with focus on Programming and Data Analytics.</p>
                    <p><b>Courses:</b><br/>Large Scale Application Development, Database Technology, Analysis of Networks and Complex Systems,
                        Data Mining, Information Storage and Retrieval, Generalised Linear Modeling, Multivariate Analysis, Foundations of Statistical Analytics, Operations Research.
                    </p>
                    <p>Final project was a Twitter data mining task which predicts movies success using both lexicon-based and machine learning approaches.</p>
                </div>,
                logo:require('../images/ucc_logo.png'),
                showDetail: false
            },
            {
                university: 'University College Dublin, Dublin, Ireland',
                degree: 'MSc. Computer Science',
                honours: 'First class honours',
                gpa: '3.76/4.2',
                date: '09/2015 - 09/2016',
                description: <div>
                    <p>Negotiated Learning MSc in Computer Science, all courses were hand picked but mostly software engineering focused. Intensive one-year master.</p>
                    <p><b>Courses:</b><br/> Java Technologies, Java-based Data Structures, iOS Development, Ruby, Network and Internet Systems, Game Development, Data Science in Python.</p>
                    <p>Final project was design and implementation of an iOS Twitter client with tweet recommendation system backend.</p>
                </div>,
                logo:require('../images/ucd_logo.png'),
                showDetail: false
            },

            {
                university: 'University of Limerick, Limerick, Ireland',
                degree:'Software Engineering',
                gpa: '3.4/4.0',
                date: '09/2014 - 06/2015',
                description:<div>
                    <p>A one-year period exchange student programme which was fully funded by the Chinese Scholarship Council.</p>
                    <p><b>Courses:</b><br/>Distributed System, Database System, Software Testing, Mobile Application Design, C++ Programming</p>
                </div>,
                logo:require('../images/ul_logo.png'),
                showDetail: false
            },
            {
                university: 'Harbin Engineering University, Harbin, China',
                degree: 'BSc. Software Engineering',
                gpa: '79.77%',
                date: '08/2011 - 09/2015',
                description:<div>
                    <p>BSc. in Software Engineering</p>
                    <p><b>Courses:</b><br/>C++ programming, Java, Android Development, Software Engineering, Software Testing, IT English, Database System</p>
                </div>,
                logo:require('../images/heu_logo.png'),
                showDetail: false
            }
        ],
        skills: [
            {
                title:'Languages',
                value: {
                    'Java':'90%',
                    'JavaScript':'90%',
                    'Python':'70%'
                }
            },
            {
                title: 'Technologies',
                value: {
                    'HTML5':'80%',
                    'CSS':'80%',
                    'ECMAScript6':'60%',
                    'React':'70%',
                    'jQuery': '70%',
                    'Flask': '50%',
                    'scikit-learn':'60%',
                    'SQL':'50%'
                }
            },
            {
                title: 'Tools',
                value: {
                    'Git':'80%',
                    'Eclipse':'90%',
                    'Xcode':'60%',
                    'LaTex':'80%',
                    'Windows':'90%',
                    'Mac OSX':'90%',
                    'PhotoShop':'70%'
                }
            },
            {
                title: 'Statistic Skills',
                value: {
                    'Linear Regression':'70%',
                    'Probabilities': '70%',
                    'Data Mining':'60%'
                }
            }
        ],
        scholarships: [
            {
                date: '06/2016',
                title: 'College of SEFS George Boole Scholarship',
                community:'University College Cork'
            },
            {
                date:'02/2015',
                title: 'UCD Graduate Global Scholarship',
                community: 'University College Dublin'
            },
            {
                date:'06/2014',
                title:'Excellence Undergraduate Scholarship',
                community:'Chinese Scholarship Council'
            },

        ],
        portfolio: [
            {
                title:'Twitter Recommender System',
                imageUrl:require('../images/lovelace-logo.png'),
                description:'This is a group project',
                github:'www.github.com',
            },
            {
                title:'Twitter Movie Success Prediction',
                imageUrl:require('../images/movie-success.png'),
                description:'This is a twitter project',
                github:'www.github.com',
            },
            {
                title:'Memory Game',
                imageUrl:require('../images/memory-game.png'),
                description:'This is a twitter project',
                github:'www.github.com',
                url:'www.xinqi-lee.com'
            },
            {
                title:'Band Website',
                imageUrl:require('../images/band-site.png'),
                description:'This is a twitter project',
                github:'www.github.com',
                url:'www.xinqi-lee.com'
            },
            {
                title:'Old Portfolio Page',
                imageUrl:require('../images/old-portfolio.png'),
                description:'This is a twitter project',
                github:'www.github.com',
                url:'www.xinqi-lee.com'
            }

        ],
        volunteering: [
            {
                date: '05/2017 - 08/2017',
                title:'Kitchen Assistant',
                community: 'Cork Penny Dinners, Cork, Ireland',
                jobs:['Prepare ingredients','Clean kitchen', 'Serve tea and coffee']
            }
        ],
        interest: [
            {
                title:'Photography',
                icon: <Camera/>,
                description:'I love taking photos'
            },
            {
                title:'Travelling',
                icon: <Travelling/>,
                description:'I love taking photos'
            },
            {
                title:'Music',
                icon: <Music/>,
                description:'I love taking photos'
            },
            {
                title:'Cooking',
                icon: <Cooking/>,
                description:'I love taking photos'
            },
        ]
    };

  render() {
    return (
        <div className="app">
            <header>
                <div className="info-background"></div>
                <Information info={this.state.information}/>
            </header>
            <article className="resume-body">
                <PersonalProfile profileText = {this.state.profile}/>
                <Education onShowDetail={this.showEduDetail} educations = {this.state.education}/>
                <Skills skills = {this.state.skills}/>
                <Scholarships scholars={this.state.scholarships}/>
                <Portfolio portfolios={this.state.portfolio}/>
                <Volunteering volunteers={this.state.volunteering}/>
                <Interest interests={this.state.interest}/>
            </article>
            <footer>
                <p>© 2017 Xinqi Li. All rights reserved.</p>
            </footer>
        </div>


    );
  }
}

export default App;
