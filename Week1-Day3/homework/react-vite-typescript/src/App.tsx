import './App.css'
// Exercise 3
// import MatchCard from './components/Football/MatchCard';
// import FCCard from './components/Football/FCCard';
// import PlayerCard from './components/Football/PlayerCard';
// import DashboardCard from './components/Football/DashboardCard';

// Exercise 4
// import InfoCard from './components/Exercise4';
// import { Camera, Phone } from 'lucide-react';

// Exercise 5
// import TeamCard from './components/Exercise5';

// Exercise 6
// import StoreCard from './components/Exercise6/StoreCard';
// import NotificationCard from './components/Exercise6/NotificationCard';

// Exercise 7
import WeatherButton from './components/Exercise7/WeatherButton';
import { MoreHorizontal, CloudSun, Sun, Play, CloudLightning, CloudRain } from 'lucide-react';
import Forecast from './components/Exercise7/Forecast';
import TemperatureCard from './components/Exercise7/Temperature';
import CalendarCard from './components/Exercise7/Calendar';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, }}>
      {/* Exercise 3 */}
      {/* <MatchCard 
        TeamA="Spain" 
        TeamB="France" 
        TeamAScore={0} 
        TeamBScore={0} 
        TeamALogo="images/spain.png"
        TeamBLogo="images/france.png"
        MatchTime="7'"
      />

      <FCCard 
        Name="Manchester United" 
        Logo="images/mu.png"
      />

      <PlayerCard 
        Name="Wade Warren"
        Visa="4293 3242 ••••"
      />

      <DashboardCard 
        title="Dashboard"
        subtitle="Business management service"
        percent={80}
        tags={[
          { text: 'Highlight', background: '#f0fdf4' },
          { text: 'Feeds', background: '#fcf2fd' }
        ]}
      /> */}


      {/* Exercise 4 */}
      {/* <InfoCard
        name="Yolanda"
        job="Web Development"
        icon={<Camera />}
      />
      <InfoCard
        name="María"
        icon={<Phone />}
      /> */}


      {/* Exercise 5 */}
      {/* <TeamCard
        title="Miriam Jimenez"
        background="#0fd0f9"
        bold
      />
      <TeamCard
        title="Teams"
        subtitle="Two currently"
        background="#6c10fa"
        bold
      />
      <TeamCard
        title="New Teams"
        background="#fff900"
        bold
      /> */}


      {/* Exercise 6 */}
      {/* <StoreCard
          logo="images/nike.png"
          name="Nike store"
          desc="6 months of promotions"
          amount="-27.50"
          time="11:00AM"
        />

      <NotificationCard
        message="All your notifications are well turned on"
        count={3}
      /> */}


      {/* Exercise 7 */}
      <WeatherButton
        icon={<div style={{ background: '#f5f6fa', width: 40, height: 40, borderRadius: '50%' }} />}
        title="Landescape"
        subtitle="423Km"
        background="#fcffe6"
        rightIcon={<MoreHorizontal />}
      />
      <WeatherButton
        icon={<div style={{ background: '#f5f6fa', width: 40, height: 40, borderRadius: '50%' }} />}
        title="Falset Mountains"
        subtitle="423Km, 3 Week"
        background="#fff"
        titleColor="#7b8a99"
        rightIcon={<CloudSun color="#2ec4a6" />}
      />
      <WeatherButton
        icon={<Sun color="#ffd600" size={28} />}
        title="Great day to schedule"
        subtitle="Lorem ipsum dolor sitamet."
        background="#f3faff"
        rightIcon={
          <div style={{
            background: '#5d5dfc',
            borderRadius: '50%',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Play color="#fff" />
          </div>
        }
      />

      <Forecast
        title="Great day to schedule"
        subtitle="Your usual hours"
        rightIcon={<MoreHorizontal />}
        showTime
        items={[
          { day: 'Mon', icon: <CloudLightning color="#7b8a99" />, time: '02:27 PM' },
          { day: 'Tue', icon: <CloudSun color="#ffd600" />, time: '06:00 AM', selected: true },
          { day: 'Wed', icon: <Sun color="#ffd600" />, time: '07:30 PM' },
          { day: 'Thu', icon: <CloudRain color="#2ec4a6" />, time: '12:00 PM' },
          { day: 'Fri', icon: <CloudSun color="#ffd600" />, time: '04:00 PM' },
        ]}
      />

      <Forecast
        items={[
          { day: 'Mon', icon: <CloudLightning color="#7b8a99" /> },
          { day: 'Tue', icon: <CloudSun color="#ffd600" /> },
          { day: 'Wed', icon: <Sun color="#ffd600" />, selected: true },
          { day: 'Thu', icon: <CloudRain color="#2ec4a6" /> },
          { day: 'Fri', icon: <CloudSun color="#ffd600" /> },
        ]}
      />

      <TemperatureCard
        city="Seatle"
        weather="Cloudy"
        temperature={32}
        icon={<CloudSun color="#fff700" size={40} />}
        background="linear-gradient(90deg, #ff512f 0%, #dd2476 100%)"
      />

      <CalendarCard
        month="Jun"
        day="23"
        weekday="Wednesday"
        timeRange="08:00 PM - 18:30 PM"
      />
    </div>
  )
}

export default App
