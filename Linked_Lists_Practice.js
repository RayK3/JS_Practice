//linked lists practice in JS
  var Node = function(data) {
  this.data = data;
  this.link = null;
  };

var linkedList = {
  head: null,

  push : function(data) {
    if(this.head === null)
    {
      var newNode = new Node(data);
      this.head = newNode;
    }
    else
    {
      var newNode = new Node(data); // creates a new node
      newNode.link = this.head;
      this.head = newNode;
    }
  },
  pop : function() {
    if(this.head === null)
      console.log('No items in list.');
    else
    {
      var beingPopped = this.head;
      this.head = this.head.link;
      return beingPopped.data;
    }
  },
  unshift : function(data) {
    if(this.head === null)
    {
      var newNode = new Node(data);
      this.head = newNode;
    }
    else
    {
      var newNode = new Node(data);
      var transversalNode = this.head;

      while(transversalNode.link !== null) {
        transversalNode = transversalNode.link;
      }

      transversalNode.link = newNode;
    }
  },
  shift : function() {
    if(this.head === null)
      console.log('No items in list.');
    else if(this.head.link === null) {
      var tempNode = this.head;
      this.head = null;
      return tempNode.data;
    } else
    {
      var transversalNode = this.head;
      while(transversalNode.link.link !== null)
      {
        transversalNode = transversalNode.link;
      }

      var beingShifted = transversalNode.link;
      transversalNode.link = null;
      return beingShifted.data;
    }
  }
};
