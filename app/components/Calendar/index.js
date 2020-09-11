import { memo } from 'react';
import moment from 'moment';
import Toolbar from './Toolbar';
import { Card, CardBody, Popover } from 'reactstrap';
import { Calendar as BigCalendar, Views } from 'react-big-calendar';
import localizer from 'react-big-calendar/lib/localizers/moment';

const Calendar = memo((props) => (
  <Card>
    <CardBody>
      <BigCalendar
        localizer={localizer(moment)}
        style={{ minHeight: '600px', height: 'calc(100vh - 375px)' }}
        views={['month', 'day']}
        components={{
          toolbar: Toolbar,
        }}
        {...props}
      />
    </CardBody>
  </Card>
));

export default Calendar;
