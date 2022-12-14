import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>由 <Link to='https://uptimerobot.com/' text='UptimeRobot' /> 提供支持</p>
          <p>Copyright&copy; 2012-2022 <Link to='https://lfrail.cn/' text='领枫数据' />, All Rights Reserved<a
            href="https://beian.miit.gov.cn/" title="工信部备案系统" target="_blank">蒙ICP备18002966号</a></p>
        </div>
      </div>
    </>
  );
}

export default App;
