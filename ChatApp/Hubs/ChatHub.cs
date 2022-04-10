using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace ChatApp.Hubs
{
    public class ChatHub :Hub
    {

        public async Task SendMessage(string fromUser ,string message ,string img )
        {
            await Clients.All.SendAsync("RecieveMessage", fromUser, message ,img);
            
        }
    }
}
