(function(){

  angular.module('jobprofile').controller('jobprofileController', function($scope,$location,$mdBottomSheet, jobService, $http) {

    $scope.openMatchingProfiles= function(jobId)
    {
      $location.path('/jobprofile/'+jobId);
    }
    /* $scope.jobProfiles=[];

     $scope.GetJobDescription = function(){
        jobService.jobDescriptions().then(function(response){
            //console.log(response);
            //$scope.jobProfiles = response.data;
            var prof=JSON.stringify(response.data);
            $scope.jobProfiles = prof;
            console.log(prof);
          }, function(){

          });
     };
 $scope.GetJobDescription();*/
    $scope.jobProfiles = [
      {
        jobId:1,
        title:'Java Developer',
        location:'Hyderabad',
        experience:'5-10yrs',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },{
        jobId:2,
        title:'C Developer',
        location:'Hyderabad',
        experience:'5-10yrs',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },{
        jobId:3,
        title:'DB Administrator',
        location:'Hyderabad',
        experience:'5-10yrs',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },{
        jobId:4,
        title:'Python Developer',
        location:'Hyderabad',
        experience:'2-3yrs',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },{
        jobId:5,
        title:'Java Developer',
        location:'Hyderabad',
        experience:'5-10yrs',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },{
        jobId:6,
        title:'Java Developer',
        location:'Hyderabad',
        experience:'5-10yrs',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },{
        jobId:7,
        title:'Java Developer',
        location:'Hyderabad',
        experience:'5-10yrs',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },{
        jobId:8,
        title:'Java Developer',
        location:'Hyderabad',
        experience:'5-10yrs',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      
      }];

      $scope.matchingProfiles = [
        {
          email:'shiva2035.iiit@gmail.com',
          githubrank:'34',
          fullscore:'50%'
        },
        {
          email:'amshekar@hotmail.com',
          githubrank:'64',
          fullscore:'60%'
        },
        {
          email:'pydershackathon@hotmail.com',
          githubrank:'3634',
          fullscore:'70%'
        },
        {
          email:'vjerla@hotmail.com',
          githubrank:'1234',
          fullscore:'80%'
        },
        {
          email:'karan@hotmail.com',
          githubrank:'1234',
          fullscore:'72%'
        },
        {
          email:'kumar@hotmail.com',
          githubrank:'124',
          fullscore:'55%'
        },
        {
          email:'krishna@hotmail.com',
          githubrank:'134',
          fullscore:'50%'
        },
        {
          email:'kailash@gmail.com',
          githubrank:'1234',
          fullscore:'50%'
        },
        {
          email:'bhuvan@gail.com',
          githubrank:'1234',
          fullscore:'50%'
        },
        {
          email:'krishna@hotmail.com',
          githubrank:'14',
          fullscore:'50%'
        }];
        $scope.selectedJobProfile={
            jobId:8,
            title:'Java Developer',
            location:'Hyderabad',
            experience:'5-10yrs',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        }

       // $scope.showContactOptions = showContactOptions;
         /**
     * Show the bottom sheet
     */

     $scope.sendInvite = function(email){
        jobService.sendInvitation(email).then(function(response){
            console.log(response);
          }, function(){

          });
     };
    $scope.showContactOptions=function ($event) {
      var user = self.selected;

      return $mdBottomSheet.show({
        templateUrl: './static/pages/job-profile/view/share.html',
        controller: [ '$mdBottomSheet', ContactPanelController],
        controllerAs: "cp",
        bindToController : true,
        targetEvent: $event
      }).then(function(clickedItem) {
        //clickedItem && $log.debug( clickedItem.name + ' clicked!');
      });

      /**
       * Bottom Sheet controller for the Avatar Actions
       */
      function ContactPanelController( $mdBottomSheet, jobService ) {
        this.user = user;
        this.actions = [
          { name: 'Phone'       , icon: 'phone'       , icon_url: '/static/assets/svg/phone.svg'},
          { name: 'Email'     , icon: 'mail'     , icon_url: '/static/assets/svg/mail.svg'},
          //{ name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
          { name: 'Skype'     , icon: 'skype'    , icon_url: '/static/assets/svg/skype.svg'},
          { name: 'Hangout'     , icon: 'hangouts'    , icon_url: '/static/assets/svg/hangouts.svg'}

        ];
        this.submitContact = function(action) {
            //console.log(action);
            $mdBottomSheet.hide(action);

        };
      }
  }

  });
 

})();