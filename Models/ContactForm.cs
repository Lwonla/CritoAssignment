using System.ComponentModel.DataAnnotations;

namespace Crito.Models;

public class ContactForm
{
    [Required(ErrorMessage = "You must enter a name")]
    public string Name { get; set; } = null!;

    [Required(ErrorMessage = "You must enter an email address")]
    [RegularExpression(@"^[\w\.-]+@[\w\.-]+\.\w+$", ErrorMessage = "Invalid email address")]
    public string Email { get; set; } = null!;

    [Required(ErrorMessage = "You must enter a message")]
    public string Message { get; set; } = null!;
    public string? RedirectUrl { get; set; } = "/";
}
