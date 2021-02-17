App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load pets.
    $.getJSON('../pets.json', function(data) {
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i ++) {
        petTemplate.find('.panel-title').text(data[i].name);
        petTemplate.find('img').attr('src', data[i].picture);
        petTemplate.find('.pet-breed').text(data[i].breed);
        petTemplate.find('.pet-age').text(data[i].age);
        petTemplate.find('.pet-location').text(data[i].location);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        petsRow.append(petTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {
    if(window.ethereum){ //Meta Mask?
      App.web3Provider = window.ethereum;
      try{
        //Request account access
        await window.ethereum.enable();
      }catch(error){
        console.error("User denied account access");
      }
    }else if(windows.web3){ //injected web3
      App.web3Provider = window.web3.currentProvider;
    }else{ //local ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);
    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Adoption.json',function(data){
      //get the necessary contract artifact ABI and MetaData
      var AdoptionArtifact = data;
      App.contracts.Adoption = TruffleContract(AdoptionArtifact);

      //set the provider for our contract
      App.contracts.Adoption.setProvider(App.web3Provider);

      return App.markAdopted();

    });
    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: async function() {
    try{
      const instance = await App.contracts.Adoption.deployed();
      const adopters = await instance.getAdopter.call();
      for(var i =0; i< adopters.length; i++){
        if(adopter[i] !== '0x0000000000000000000000000000000000000000'){
          $('panel-pet').eq(i)
          .find('button')
          .text('Success')
          .attr('disabled',true);

        }
      }

    }catch(error){
      console.error(error.message);
    }
  },

  handleAdopt: async function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));
    try{
      const accounts = await web3.eth.getAccounts();
      let account = accounts[0];
      const instance = await App.contracts.Adoption.deployed();
      const result = instance.adopt(petId,{from: account});
      App.markAdopted()
    }catch(error){
      console.error(error.message);
    }
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
