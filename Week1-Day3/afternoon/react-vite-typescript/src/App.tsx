import './App.css'
// Exercise 1
// import Button from './components/Button';
// import { Facebook, Youtube, Chrome, ArrowRight } from 'lucide-react';

// Exercise 2
// import TextBox from './components/TextBox'
// import { Search, WifiHigh, Settings2, Phone } from 'lucide-react';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, }}>
      {/* Exercise 1 */}
      {/* <Button label="Get started" rightIcon={<ArrowRight />} type="primary" />
      <Button label="Continue with Youtube" leftIcon={<Youtube />} type="primary" />
      <Button label="Continue with Chrome" leftIcon={<Chrome />} type="outline" />
      <Button label="Continue with Chrome" leftIcon={<Facebook />} type="outline" /> */}

      {/* Exercise 2 */}
      {/* <TextBox leftIcon = {<Search />} />
      <TextBox label = "Search" leftIcon = {<Search />} type="light"/>
      <TextBox label = "Textfield" leftIcon = {<Search />} type="bold"/>
      <TextBox label = "Search in the web" leftIcon = {<Search />} rightIcon = {<WifiHigh  />} />
      <TextBox label = "Search crypto" leftIcon = {<Search />} rightIcon = {<Settings2 />} />
      <TextBox label = "Phone number" rightIcon = {<Phone />} icon='square' />
      <TextBox label = "Search in the web" leftIcon = {<Search />} rightIcon = {<WifiHigh  />} icon='circle' /> */}
    </div>
  )
}

export default App
