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
        profile: 'Highly motivated and hardworking computer science graduate with a first class honours degree from University College Dublin. ' +
                 'Currently finishing second Master’s Degree in Data Science at University College Cork. ' +
                 'Highly skilled in designing, programming and data analysing. ' +
                 'Looking to secure a graduate position in the IT field where both my programming skills and data analytics skills can be fully utilised.',
        education: [
            {
                university: 'University College Cork, Cork, Ireland',
                degree: 'MSc. Data Science & Analytics',
                gpa: '74%',
                date: '09/2016 - present',
                description:'A data mining task which predicts a movie\'s success based on audience\'s reviews on Twitter. ' +
                'Firstly, the tweets will be classified into Positive, Negative and Neutral. ' +
                'Then an optimised prediction model will be built using the volume of tweets in ' +
                'each category as well as other relevant attributes.',
                showDetail: false
            },
            {
                university: 'University College Dublin, Dublin, Ireland',
                degree: 'MSc. Computer Science',
                honours: 'First class honours',
                gpa: '3.76/4.2',
                date: '09/2015 - 09/2016',
                description:'A data mining task which predicts a movie\'s success based on audience\'s reviews on Twitter. ' +
                'Firstly, the tweets will be classified into Positive, Negative and Neutral. ' +
                'Then an optimised prediction model will be built using the volume of tweets in ' +
                'each category as well as other relevant attributes.',
                showDetail: false
            },

            {
                university: 'University of Limerick, Limerick, Ireland',
                degree:'Software Engineering',
                gpa: '3.4/4.0',
                date: '09/2014 - 06/2015',
                description:'One-year period exchange student programme.',
                showDetail: false
            },
            {
                university: 'Harbin Engineering University, Harbin, China',
                degree: 'BSc. Software Engineering',
                gpa: '79.77%',
                date: '08/2011 - 09/2015',
                description:'Bachelor\'s degree in Harbin Engineering University.',
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
