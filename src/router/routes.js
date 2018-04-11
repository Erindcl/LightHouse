import IndexIntro from '../pages/IndexIntro.vue'
import ComShow from '../pages/ComShow.vue'
import IndexUser from '../pages/IndexUser.vue'
import RegAndLog from '../pages/RegAndLog.vue'
import Login from '../pages/Login.vue'
import ChooseRoud from '../pages/ChooseRoud.vue'
import Resources from '../pages/Resources.vue'
import Personal from '../pages/Personal.vue'
import OneResource from '../pages/OneResource.vue'
import Project from '../pages/Project.vue'
import TestOnline from '../pages/TestOnline.vue'
import StudyPage from '../pages/StudyPage.vue'
import ProjectShow from '../pages/ProjectShow.vue'

export const MainIntro = {
  path: 'indexintro',
  name: 'indexintro',
  component: IndexIntro
}

export const ShowCom = {
  path: 'comshow',
  name: 'comshow',
  component: ComShow,
  children: [
    {
      path: 'indexuser',
      name: 'indexuser',
      component: IndexUser
    },
    {
      path: 'resources',
      name: 'resources',
      component: Resources
    },
    {
      path: 'personal',
      name: 'personal',
      component: Personal
    },
    {
      path: 'oneresource',
      name: 'oneresource',
      component: OneResource
    },
    {
      path: 'project',
      name: 'project',
      component: Project
    },
    {
      path: 'testonline',
      name: 'testonline',
      component: TestOnline
    },
    {
      path: 'studypage',
      name: 'studypage',
      component: StudyPage
    },
    {
      path: 'projectshow',
      name: 'projectshow',
      component: ProjectShow
    }
  ]
}

export const CommonRAL = {
  path: 'regandlog',
  name: 'regandlog',
  component: RegAndLog,
  children: [
    {
      path: 'login',
      name: 'login',
      component: Login
    },
    {
      path: 'chooseroud',
      name: 'chooseroud',
      component: ChooseRoud
    }
  ]
}