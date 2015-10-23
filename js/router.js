(function () {
  var app = angular.module('RtmaApp.Router', ['ui.router'])

  app.config(router);

  function router($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("Login");

    $stateProvider.state("Login", {
      url: '/Login',
      templateUrl: 'partials/login.html'
    });

    $stateProvider.state("Registration", {
      url: '/Register',
      templateUrl: 'partials/StudentRegistration.html'
    });

    $stateProvider.state("Registration.personalDetails", {
      url: '/personalDetails',
      templateUrl: 'partials/personaldetails.html'
    });

    $stateProvider.state("Registration.contactDetails", {
      url: '/contactDetails',
      templateUrl: 'partials/ContactDetails.html'
    });

    $stateProvider.state("Registration.acadDetails", {
      url: '/acadDetails',
      templateUrl: 'partials/acadamicdetails.html'
    });

    $stateProvider.state("Registration.ExtraActivities", {
      url: '/ExtraActivities',
      templateUrl: 'partials/extraactivities.html'
    });

    $stateProvider.state("candidatelogin", {
      url: '/candidatelogin',
      templateUrl: 'partials/CandidateLogin.html'
    });

    $stateProvider.state("drivedesc", {
       url: '/drivedesc/:DriveID',
       templateUrl: 'partials/drivedesc.html'
    });

    $stateProvider.state("finddrives", {
      url: '/finddrives',
      templateUrl: 'partials/finddrives.html',
    });

    $stateProvider.state("ImportQuestions", {
      url: '/ImportQuestions',
      templateUrl: 'partials/ImportQuestions.html'
    });

    $stateProvider.state("main", {
      url: '/findstudentssolr',
      templateUrl: 'partials/findstudentssolr.html'
    });

    $stateProvider.state("createdrive", {
      url: '/createdrive',
      templateUrl: 'partials/createdrive.html'
    });

    $stateProvider.state("AddQuestion", {
      url: '/AddQuestion',
      templateUrl: 'partials/AddQuestion.html'
    });

    $stateProvider.state("Solution", {
      url: '/Solution/:qid',
      templateUrl: 'partials/Solution.html'
    });

    $stateProvider.state("StudentDetails", {
      url: '/StudentDetails',
      templateUrl: 'partials/StudentDetails.html'
    });

    $stateProvider.state("viewtestpaper", {
      url: '/viewtestpaper',
      templateUrl: 'partials/viewtestpaper.html'
    });

    $stateProvider.state("viewtestpaper.aptitude", {
      url: '/aptitude',
      templateUrl: 'partials/aptitude.html'
    });

    $stateProvider.state("viewtestpaper.technical", {
      url: '/technical',
      templateUrl: 'partials/technical.html'
    });

    $stateProvider.state("proceedtest", {
      url: '/proceedtest',
      templateUrl: 'partials/proceedtest.html'
    });

    $stateProvider.state("testcomplete", {
      url: '/testcomplete',
      templateUrl: 'partials/testcomplete.html'
    });

    $stateProvider.state("drivemonitor", {
      url: '/drivemonitor',
      templateUrl: 'partials/drivemonitor.html'
    });
  }
})();