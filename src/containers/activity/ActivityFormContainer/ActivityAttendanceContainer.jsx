import ActivityAttendance from '../../../components/activity/ActivityForm/ActivityAttendance';
import React, { useEffect, useState } from 'react';
import * as activityAPI from '../../../lib/api/activity';
import { withRouter } from 'react-router-dom';
import { MENU } from '../../../constants/menus';
import useLoginCheck from '../../../hooks/useLoginCheck';
import Spinner from '../../../components/common/Spinner/Spinner';

const ActivityAttendanceContainer = ({ match, history }) => {
  const activityID = match.params.activityID;
  const sessionID = match.params.sessionID;

  const [loading, setLoading] = useState(true);

  const [activity, setActivity] = useState(null);
  const [activityMembers, setActivityMembers] = useState(null);
  const [activitySession, setActivitySession] = useState(null);
  const [activitySessions, setActivitySessions] = useState(null);
  const [sessionAttendance, setSessionAttendance] = useState(null);

  useLoginCheck(history);

  useEffect(() => {
    (async () => {
      const activityResponse = await activityAPI.getActivity(activityID);
      setActivity(activityResponse.data.data);

      const activityMemberResponse = await activityAPI.getActivityMembers(
        activityID,
      );
      setActivityMembers(activityMemberResponse.data.data);

      const activitySessionsResponse = await activityAPI.getActivitySessions(
        activityID,
      );
      setActivitySessions(activitySessionsResponse.data.data);

      if (sessionID) {
        const activitySessionResponse = await activityAPI.getActivitySession(
          sessionID,
        );
        const sessionAttendance = await activityAPI.getActivitySessionAttendances(
          sessionID,
        );
        setSessionAttendance(sessionAttendance.data.data);
        setActivitySession(activitySessionResponse.data);
      }

      setLoading(false);
    })();
  }, [activityID, sessionID]);

  // if (
  //   activity === null ||
  //   activityMembers == null ||
  //   activitySessions == null
  // ) {
  //   return null;
  // }

  const onCreateSession = async ({
    sessionNumber,
    date,
    description,
    attendances,
  }) => {
    const sessionCreateResponse = await activityAPI.createActivitySession({
      activityID,
      sessionNumber,
      date,
      description,
    });
    const sessionID = sessionCreateResponse.data.id;
    const sessionAttendancesCreateResponse = await activityAPI.checkActivityAttendance(
      {
        sessionID,
        memberLoginIDs: attendances.map((attendance) => attendance.loginID),
      },
    );
    if (sessionAttendancesCreateResponse.status === 200) {
      history.push(`/${MENU.ACTIVITY}/${activityID}`);
    }
  };

  const onUpdateSession = async ({ date, description, attendances }) => {
    const sessionUpdateResponse = await activityAPI.updateActivitySession({
      sessionID,
      date,
      description,
    });
    const sessionAttendancesUpdateResponse = await activityAPI.checkActivityAttendance(
      {
        sessionID,
        memberLoginIDs: attendances.map((attendance) => attendance.loginID),
      },
    );
    console.log(sessionAttendancesUpdateResponse);
    if (sessionUpdateResponse.status === 200) {
      history.push(`/${MENU.ACTIVITY}/${activityID}`);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <ActivityAttendance
          activity={activity}
          activityMembers={activityMembers}
          activitySession={activitySession}
          sessionNumber={activitySessions.length}
          sessionAttendance={sessionAttendance}
          onCreateSession={onCreateSession}
          onUpdateSession={onUpdateSession}
        />
      )}
    </>
  );
};

export default withRouter(ActivityAttendanceContainer);
